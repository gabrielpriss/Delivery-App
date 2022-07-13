import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import '../css/login.css';
import axios from 'axios';

export default function Login() {
  const url = 'http://localhost:3005/login';
  const history = useHistory();
  const minPasswordLength = 6;
  const [inputUser, setInputUser] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const validateLogin = () => {
    const emailValidation = (/\S+@\S+\.\S+/).test(inputUser);
    const passwordValidation = inputPassword.length >= minPasswordLength;
    return !emailValidation || !passwordValidation;
  };

  const login = async (event) => {
    event.preventDefault();

    const userLogin = {
      email: inputUser,
      senha: inputPassword,
    };

    axios.post(url, userLogin)
      .then((response) => {
        localStorage.setItem('user', JSON
          .stringify(response.data));
        setIsLogged(true);
      })
      .catch(setFailedTryLogin(true));
  };

  useEffect(() => {
    setFailedTryLogin(false);
    if (!localStorage.getItem('user')) {
      localStorage.setItem('user');
    }
  }, [inputUser, inputPassword]);

  if (isLogged) return <Redirect to="/produtos" />;

  return (
    <div className="login">
      <h2>LOGO</h2>
      <div className="login-form">
        <input
          data-testid="common_login__input-email"
          placeholder="email@tryber.com.br"
          type="text"
          value={ inputUser }
          onChange={ ({ target: { value } }) => setInputUser(value) }
        />
        <input
          data-testid="common_login__input-password"
          placeholder="*************"
          type="password"
          value={ inputPassword }
          onChange={ ({ target: { value } }) => setInputPassword(value) }
        />
        <button
          data-testid="common_login__button-login"
          disabled={ validateLogin() }
          type="button"
          onClick={ (event) => login(event) }
        >
          Login
        </button>
        {
          (failedTryLogin)
            ? (
              <p data-testid="common_login__element-invalid-email">
                {
                  `O endereço de e-mail ou a senha não estão corretos.
                  Por favor, tente novamente.`
                }
              </p>
            )
            : null
        }
        <button
          data-testid="common_login__button-register"
          type="button"
          onClick={ () => history.push('/register') }
        >
          Ainda não tenho conta
        </button>
      </div>
    </div>
  );
}
