import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/register.css';

export default function Register() {
  const url = 'http://localhost:3001/register';
  const history = useHistory();
  const minPasswordLength = 6;
  const minNameLength = 12;
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [failedTryRegister, setFailedTryRegister] = useState(false);

  const validateRegister = () => {
    const emailValidation = (/\S+@\S+\.\S+/).test(registerEmail);
    const passwordValidation = registerPassword.length >= minPasswordLength;
    const nameValidation = registerName.length > minNameLength;
    return !emailValidation || !passwordValidation || !nameValidation;
  };

  const register = async (event) => {
    event.preventDefault();

    const userRegister = {
      name: registerName,
      email: registerEmail,
      password: registerPassword,
    };

    axios.post(url, userRegister)
      .then((data) => {
        history.push('/customer/products');
        return data;
      })
      .catch(() => setFailedTryRegister(true));
  };

  return (
    <div className="register">
      <h2>Cadastrar</h2>
      <div className="register-form">
        <input
          data-testid="common_register__input-name"
          type="text"
          placeholder="Seu nome"
          value={ registerName }
          onChange={ ({ target: { value } }) => setRegisterName(value) }
        />
        <input
          data-testid="common_register__input-email"
          type="email"
          placeholder="email@tryber.com.br"
          value={ registerEmail }
          onChange={ ({ target: { value } }) => setRegisterEmail(value) }
        />
        <input
          data-testid="common_register__input-password"
          type="password"
          placeholder="**********"
          value={ registerPassword }
          onChange={ ({ target: { value } }) => setRegisterPassword(value) }
        />
        <button
          data-testid="common_register__button-register"
          disabled={ validateRegister() }
          onClick={ (event) => register(event) }
          type="button"
        >
          CADASTRAR
        </button>
        {
          (failedTryRegister)
            ? (
              <p data-testid="common_register__element-invalid_register">
                {
                  `O endereço de e-mail ou a senha não são validos.
                  Por favor, tente novamente.`
                }
              </p>
            )
            : null
        }
      </div>
    </div>
  );
}
