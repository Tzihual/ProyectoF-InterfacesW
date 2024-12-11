import React from 'react';
import styled from 'styled-components';
import logo from '../imagenes/logof.png';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #191970;
  color: white;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #191970;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #8B0000;
  }
`;

const Imagen = styled.img`
height:50px;`;

const Navbar = ({ onSwitchView }) => {
  return (
    <NavbarContainer>
      <Imagen src={logo} alt='Logo' title='La Butaca Crítica'/>
      <Button onClick={() => onSwitchView('home')}>Inicio</Button>
      <Button onClick={() => onSwitchView('create')}>Añadir Reseña</Button>
      <Button onClick={() => onSwitchView('list')}>Lista de Reseñas</Button>
    </NavbarContainer>
  );
};

export default Navbar;

