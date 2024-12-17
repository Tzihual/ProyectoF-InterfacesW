import React, { useState } from 'react';
import styled from 'styled-components';
import ReactStars from 'react-rating-stars-component';
import EditModal from './EditModal';

const CardContainer = styled.div`
  background:linear-gradient(to bottom, #B22222, #8B0000);
  padding: 20px;
  margin: 15px 0;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px; 
  text-align: center;
  box-sizing: border-box;
`;

const MovieTitle = styled.h3`
  color: #ffffff;
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
  color: #ffffff;
`;

const ButtonGroup = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center; /* Centrado del botón */
  gap: 30px;
`;

const Button = styled.button`
  background-color: #FFD700; 
color: #000000; 
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  
   &:hover {
    background-color: #DAA520;
    transform: translateY(-2px);
  }
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: center; /* Centra las estrellas */
  margin-bottom: 10px; /* Añade espacio entre las estrellas y la reseña */
`;

const MovieCard = ({ movie, onDelete, onEdit }) => {
  const [isModalOpen, setModalOpen] = useState(false);  // Aquí se define isModalOpen

  const handleSave = (updatedMovie) => {
    onEdit(updatedMovie);
    setModalOpen(false); // Cierra el modal después de guardar
  };

  return (
    <CardContainer key={movie.rating}>
      <MovieTitle>{movie.title}</MovieTitle>
      {movie.image && <MovieImage src={movie.image} alt={movie.title} />}
      <RatingContainer>
        <ReactStars
          count={10}
          value={movie.rating}
          size={24}
          activeColor="#FFD700"
          edit={false}
        />
      </RatingContainer>
      <MovieReview>{movie.reviews}</MovieReview>
      <ButtonGroup>
        <Button onClick={() => setModalOpen(true)}>Editar</Button>
        <Button onClick={onDelete}>Eliminar</Button>
      </ButtonGroup>
      <EditModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        movie={movie}
        onSave={handleSave}
      />
    </CardContainer>
  );
};

export default MovieCard;