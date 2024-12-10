import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  margin: 20px;
  width: 280px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 8px 18px;
  margin: 5px;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #c0392b;
    transform: translateY(-2px);
  }
`;

const MovieCard = ({ movie, onDelete, onEdit }) => {
  return (
    <Card>
      <MovieImage src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.genre}, {movie.year}</p>
      <Button onClick={onDelete}>Eliminar</Button>
      <Button onClick={onEdit}>Editar</Button>
    </Card>
  );
};

export default MovieCard;
