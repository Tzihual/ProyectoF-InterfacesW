import React from 'react';
import styled from 'styled-components';
import ReactStars from 'react-rating-stars-component';

const CardContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 15px 0;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px; /* Limita el tamaño del card */
  text-align: center;
  box-sizing: border-box;
`;

const MovieTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const MovieImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 300px; /* Controla el tamaño máximo de la imagen */
  border-radius: 8px;
  margin-bottom: 10px;
`;

const MovieReview = styled.p`
  font-size: 16px;
  color: #555;
`;

const ButtonGroup = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center; /* Centrado del botón */
`;

const Button = styled.button`
  background-color: #FF6347;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  
  &:hover {
    background-color: #FF4500;
    transform: translateY(-2px);
  }
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: center; /* Centra las estrellas */
  margin-bottom: 10px; /* Añade espacio entre las estrellas y la reseña */
`;

const MovieCard = ({ movie, onDelete, onEdit }) => {
  return (
    <CardContainer>
      <MovieTitle>{movie.title}</MovieTitle>
      {movie.image && <MovieImage src={movie.image} alt={movie.title} />}
      <RatingContainer>
        <ReactStars
          count={10}
          value={movie.rating}
          size={24}
          activeColor="#FFD700"
          edit={false} // Solo es para mostrar la calificación
        />
      </RatingContainer>
      <MovieReview>{movie.reviews}</MovieReview>
      <ButtonGroup>
        <Button onClick={onDelete}>Eliminar</Button>
      </ButtonGroup>
    </CardContainer>
  );
};

export default MovieCard;