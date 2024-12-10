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

const ListaReseña = ({ movies, onDelete, onEdit }) => {
  return (
    <PageContainer>
      <Header>Lista de Mis Reseñas</Header>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onDelete={() => onDelete(movie.id)}
            onEdit={() => onEdit(movie)}
          />
        ))}
      </div>
    </PageContainer>
  );
};

export default ListaReseña;

