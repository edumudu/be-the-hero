import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import api from '../../services/api';

import logoImage from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

const Logon = () => {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Falha no login tente novamente.');
    }
  }

  return (
    <div className="logon-container container">
      <section className="form">
        <img src={logoImage} alt="Be the hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />

          <button className="btn" type="submit">
            Entrar
          </button>

          <Link to="/register" className="back-link" >
            <FiLogIn />

            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImage} alt="heroes" />
    </div>
  )
}

export default Logon;
