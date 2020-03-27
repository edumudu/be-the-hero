import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg';

const Profile = () => {
  return (
    <div className="profile-container container">
      <header>
        <img src={logoImg} alt="Be the hero" />

        <span>Bem vinda APAD</span>

        <Link className="btn" to="/incidents/new">
          Cadastrar novo caso
        </Link>

        <button>
          <FiPower />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul>
        <li>
          <strong>Caso: </strong>
          <p>Caso teste</p>

          <strong>descricao: </strong>
          <p>Descricao teste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button>
            <FiTrash2 />
          </button>
        </li>

        <li>
          <strong>Caso: </strong>
          <p>Caso teste</p>

          <strong>descricao: </strong>
          <p>Descricao teste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button>
            <FiTrash2 />
          </button>
        </li>

        <li>
          <strong>Caso: </strong>
          <p>Caso teste</p>

          <strong>descricao: </strong>
          <p>Descricao teste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button>
            <FiTrash2 />
          </button>
        </li>

        <li>
          <strong>Caso: </strong>
          <p>Caso teste</p>

          <strong>descricao: </strong>
          <p>Descricao teste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button>
            <FiTrash2 />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Profile;
