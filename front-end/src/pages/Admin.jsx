import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/context';

export default function Admin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [failedTryRegister, setFailedTryRegister] = useState(false);
  const minPasswordLength = 6;
  const minNameLength = 12;
  const { userData, setUserData } = useContext(Context);

  const handleChange = (event) => {
    event.preventDefault();
    setRole(event.target.value);
  };

  const validateRegister = () => {
    const emailValidation = (/\S+@\S+\.\S+/).test(email);
    const passwordValidation = password.length >= minPasswordLength;
    const nameValidation = name.length >= minNameLength;
    return !emailValidation || !passwordValidation || !nameValidation;
  };

  const adminRegister = async (event) => {
    event.preventDefault();

    const resultApi = axios.create({
      baseURL: 'http://localhost:3001',
      headers: { authorization: userData.token },
    });

    const userRegister = {
      name,
      email,
      password,
      role,
    };

    resultApi.post('/admin', userRegister)
      .then((data) => data)
      .catch(() => setFailedTryRegister(true));

    setEmail('');
    setName('');
    setPassword('');
    setRole('');
  };

  useEffect(() => {
    const getData = localStorage.getItem('user');
    setUserData({
      token: JSON.parse(getData).token,
      email: JSON.parse(getData).email,
    });
  }, [name, email, password, role, setUserData]);

  console.log([name, email, password, role]);

  return (
    <div>
      <h3>Cadastrar usuarios</h3>
      <div>
        <h3>Nome:</h3>
        <input
          data-testid="admin_manage__input-name"
          type="text"
          value={ name }
          onChange={ ({ target: { value } }) => setName(value) }
          placeholder="nome"
        />
        <h3>Email:</h3>
        <input
          data-testid="admin_manage__input-email"
          type="text"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
          placeholder="nome"
        />
        <h3>Password:</h3>
        <input
          data-testid="admin_manage__input-password"
          type="password"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
          placeholder="nome"
        />
        <h3>Tipo:</h3>
        <select data-testid="admin_manage__select-role" onChange={ handleChange }>
          <option value="" selected>
            Role
          </option>
          <option value="customer">
            customer
          </option>
          <option value="seller">
            seller
          </option>
          <option value="administrator">
            Administrator
          </option>
        </select>
        {
          (failedTryRegister)
            ? (
              <p data-testid="admin_manage__element-invalid-register">
                Usuario já existe
              </p>
            )
            : null
        }
      </div>
      <button
        data-testid="admin_manage__button-register"
        type="button"
        disabled={ validateRegister() }
        onClick={ (event) => adminRegister(event) }
      >
        Registrar
      </button>
    </div>
  );
}
