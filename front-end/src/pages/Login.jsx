import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();
  const minPasswordLength = 6;
  const [inputUser, setInputUser] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const validateLogin = () => {
    const emailValidation = (/\S+@\S+\.\S+/).test(inputUser);
    const passwordValidation = inputPassword.length >= minPasswordLength;
    return !emailValidation || !passwordValidation;
  };

  return (
    <div>
      <input
        data-testid="common_login__input-email"
        type="text"
        value={ inputUser }
        onChange={ ({ target: { value } }) => setInputUser(value) }
      />
      <input
        data-testid="common_login__input-password"
        type="password"
        value={ inputPassword }
        onChange={ ({ target: { value } }) => setInputPassword(value) }
      />
      <button
        data-testid="common_login__button-login"
        disabled={ validateLogin() }
        type="button"
        onClick={ validateLogin }
      >
        Login
      </button>
      <button
        data-testid="common_login__button-register"
        type="button"
        onClick={ () => history.push('/register') }
      >
        Ainda não tenho conta
      </button>
    </div>
  );
}
