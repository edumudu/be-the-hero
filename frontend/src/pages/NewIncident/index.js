import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

const NewIncident = () => {
  return (
    <div className="new-incident-container container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero" />

          <h1>Cadastrar novo caso</h1>
          
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft />

            Voltar para home
          </Link>
        </section>

        <form>
          <input placeholder="Titulo do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em reais" />

          <button className="btn" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewIncident;
