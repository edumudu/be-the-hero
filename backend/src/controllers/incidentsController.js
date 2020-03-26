const connection = require('../database/connection');

module.exports = {
  async index (request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection('tb_incidents').count('id');

    const incidents = await connection('tb_incidents')
      .join('tb_ongs', 'tb_ongs.id', '=', 'tb_incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'tb_incidents.*', 
        'tb_ongs.name', 
        'tb_ongs.email', 
        'tb_ongs.whatsapp', 
        'tb_ongs.city', 
        'tb_ongs.uf'
      ]);
    
    response.header('X-Total-Count', count['count(`id`)']);

    return response.json(incidents);
  },

  async create (request, response) {
    const ong_id = request.headers.authorization;
    const { title, description, value } = request.body;

    const [id] = await connection('tb_incidents').insert({
      title,
      description,
      value,
      ong_id
    })

    return response.json({id});
  },

  async delete (request, response) {
    const ong_id = request.headers.authorization;
    const { id } = request.params;

    const incident = await connection('tb_incidents')
      .where('id', id)
      .select('ong_id')
      .first();
    
    if (incident.ong_id !== ong_id)
      return response.status(401).json({ error: 'Operations not permitted.' });
    
    await connection('tb_incidents')
      .where('id', id)
      .delete();

    return response.status(204).send();
  }
};
