import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 290px; /* Ancho fijo del card */
  height: 450px; /* Altura fija del card */
  padding: 10px; /* Corrige la tipografía aquí */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #00008B;
  border-radius: 10px;
  color: white;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 6px; 
  transition: transform 0.3s ease, filter 0.3s ease;
  
  &:hover {
    transform: scale(1.05); 
    filter: brightness(1.2);
  }
`;


const MovieImage = styled.img`
  width: 95%; /* La imagen ocupa todo el ancho del card */
  height: 350px; /* Altura ajustada para mantener la proporción */
  object-fit: cover; /* Asegura que la imagen cubra el espacio sin distorsión */
 
`;

const MovieInfo = styled.div`
  padding: 10px; /* Espaciado interno del contenedor de información */
  text-align: center;
  flex-grow: 1; /* Permite que este contenedor ocupe el espacio restante */
`;

const MovieTitle = styled.h3`
  font-size: 16px; /* Tamaño de fuente más compacto */
  margin: 5px 0; /* Espaciado reducido para compactar el diseño */
`;

const MovieDetails = styled.div`
  display: flex;
  justify-content: space-between; /* Espaciado entre el año y la calificación */
  align-items: center; /* Alinea los elementos verticalmente en el centro */
  width: 100%;
  padding: 0 10px; /* Añade espacio a los lados para evitar que el texto toque los bordes */
  font-size: 14px; /* Tamaño de fuente reducido */
`;


const CardCarrusel = ({ movie }) => {
  return (
    <CardContainer>
      <br></br>
      <MovieImage src={movie.image} alt={movie.title} />
      <MovieInfo>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieDetails>
          <span>{movie.year}</span>
          <span>{parseFloat(movie.rating).toFixed(1)} ★</span>
        </MovieDetails>
      </MovieInfo>
    </CardContainer>
  );
};

export default CardCarrusel;
