import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import logo from '../imagenes/logof.png';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
 background: linear-gradient(to right, #1e3c72, #2a5298, #00008B);
 background-size: cover;
  font-family: Arial, sans-serif;
`;

const FormContainer = styled.div`
  background:linear-gradient(to bottom, #B22222, #8B0000);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5), 0 0 20px #F0E68C; 
   animation: float 3s ease-in-out infinite;
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;
`;

const Icon = styled.div`
  margin-right: 10px;
  color: #999;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  flex: 1;
  font-size: 16px;
  color: #333;
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Button = styled.button`
  background-color: #FFD700;
  color: #191970;
  padding: 12px;
  width: 100%;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #DAA520;
    transform: translateY(-2px);
  }
`;

const LinksContainer = styled.div`
  margin-top: 20px;
  font-size: 14px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Notification = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => (props.success ? '#32CD32' : '#FF4500')};
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  font-weight: bold;
  animation: fadeInOut 3s forwards;
  text-align: center;
  z-index: 1000;

  @keyframes fadeInOut {
    0% { opacity: 0; transform: translate(-50%, -60%); }
    10% { opacity: 1; transform: translate(-50%, -50%); }
    90% { opacity: 1; transform: translate(-50%, -50%); }
    100% { opacity: 0; transform: translate(-50%, -40%); }
  }
`;

const SignUpForm = ({ onSwitchToLogin, onRegisterUser }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (credentials.username && credentials.email && credentials.password) {
      const success = onRegisterUser(credentials); // Llamar a la función de registro desde App.js
      if (success) {
        setNotification({ success: true, message: 'Cuenta creada exitosamente' });
        setTimeout(() => {
          setNotification(null);
          onSwitchToLogin(); // Cambia al formulario de inicio de sesión
        }, 3000);
      } else {
        setNotification({
          success: false,
          message: 'El usuario o el correo ya están registrados',
        });
        setTimeout(() => setNotification(null), 3000);
      }
    } else {
      setNotification({ success: false, message: 'Por favor completa todos los campos' });
      setTimeout(() => setNotification(null), 3000);
    }
  };

  return (
    <PageContainer>
      {notification && (
        <Notification success={notification.success}>
          {notification.message}
        </Notification>
      )}
      <FormContainer>
        <Logo src={logo} alt="Logo" />
        <Title>Crea tu cuenta</Title>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Icon><FaUser /></Icon>
            <Input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Icon><FaEnvelope /></Icon>
            <Input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Icon><FaLock /></Icon>
            <Input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <ButtonContainer>
            <Button type="submit">Crear cuenta</Button>
          </ButtonContainer>
        </form>
        <LinksContainer>
          <Link href="#" onClick={onSwitchToLogin}>¿Ya tienes una cuenta?</Link>
        </LinksContainer>
      </FormContainer>
    </PageContainer>
  );
};

export default SignUpForm;
