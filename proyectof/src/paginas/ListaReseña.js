import React from 'react';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';

const PageContainer = styled.div`
  padding: 20px;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const NoReviewsMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #555;
`;

const ListaReseña = ({ movies, onDelete, onEdit }) => {
  return (
    <PageContainer>
      <Header>Lista de Mis Reseñas</Header>
      {movies.length === 0 ? (
        <NoReviewsMessage>No tienes reseñas guardadas aún.</NoReviewsMessage>
      ) : (
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onDelete={() => onDelete(movie.id)}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}
    </PageContainer>
  );
};


export default ListaReseña;