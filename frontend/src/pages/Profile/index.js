import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

const Profile = () => {
  const [incidents, setIncidents] = useState([]);

  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data.reverse())
    });
  }, [ongId]);

  async function handleDeleteincident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: { Authorization: ongId }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert('Erro ao cair no caso, tente novamente.')
    }
  }

  function handleLogout () {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container container">
      <header>
        <img src={logoImg} alt="Be the hero" />

        <span>Bem vinda { ongName }</span>

        <Link className="btn" to="/incidents/new">
          Cadastrar novo caso
        </Link>

        <button onClick={handleLogout}>
          <FiPower />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Caso: </strong>
            <p>{incident.title}</p>

            <strong>descricao: </strong>
            <p>{incident.description}</p>

            <strong>VALOR: </strong>
            <p>
              {
                Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(incident.value)
              }
            </p>

            <button onClick={() => handleDeleteincident(incident.id)}>
              <FiTrash2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Profile;
