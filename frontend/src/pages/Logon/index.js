import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImage from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

const Logon = () => {
  return (
    <div className="logon-container container">
      <section className="form">
        <img src={logoImage} alt="Be the hero" />

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID" />

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
