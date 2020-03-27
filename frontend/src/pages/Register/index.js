import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import './styles.css';

const Register = () => {
  return (
    <div className="register-conteiner container">
      <div className="content">
        <section>
          <img src={logoImage} alt="Be the hero" />

          <h1>Cadastro</h1>
          
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft />

            Voltar para o logon
          </Link>
        </section>

        <form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="Whatsapp" />

          <div className="input-group">
            <input placeholder="City" />
            <input placeholder="UF" style={{ width: 80 }}/>
          </div>

          <button className="btn" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
