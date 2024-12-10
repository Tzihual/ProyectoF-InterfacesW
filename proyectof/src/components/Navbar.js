import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #0255a5;
  color: white;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #2980b9;
  }
`;

const Navbar = ({ onSwitchView }) => {
  return (
    <NavbarContainer>
      <Button onClick={() => onSwitchView('home')}>Inicio</Button>
      <Button onClick={() => onSwitchView('create')}>Agregar Película</Button>
      <Button onClick={() => onSwitchView('list')}>Lista de Reseñas</Button>
    </NavbarContainer>
  );
};

export default Navbar;

