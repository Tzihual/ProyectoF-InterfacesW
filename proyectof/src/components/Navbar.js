import React from 'react';
import styled from 'styled-components';
import logo from '../imagenes/logof.png';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #191970;
  color: white;
  font-family: Arial, sans-serif;
`;

const Logo = styled.img`
  height: 50px;
`;

const NavButton = styled.button`
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

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserIcon = styled.div`
  background-color: #FFD700;
  color: #4B0082;
  font-size: 16px;
  font-weight: bold;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const Navbar = ({ onSwitchView, currentUser, onLogout }) => {
  const getUserInitial = () => {
    return currentUser?.username.charAt(0).toUpperCase() || '?';
  };

  return (
    <NavbarContainer>
      <Logo src={logo} alt="Logo" />
      <div>
        <NavButton onClick={() => onSwitchView('home')}>Inicio</NavButton>
        <NavButton onClick={() => onSwitchView('create')}>Añadir Reseña</NavButton>
        <NavButton onClick={() => onSwitchView('list')}>Lista de Reseñas</NavButton>
      </div>
      {currentUser && (
        <UserContainer>
          <UserIcon>{getUserInitial()}</UserIcon>
          <span>{currentUser.username}</span>
          <NavButton onClick={onLogout}>Cerrar sesión</NavButton>
        </UserContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
