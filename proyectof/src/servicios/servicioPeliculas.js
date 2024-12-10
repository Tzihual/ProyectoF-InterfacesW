// src/servicios/servicioPeliculas.js
// src/servicios/servicioPeliculas.js
import tmdbApi from '../api';

const baseUrl = "https://image.tmdb.org/t/p/w500";

// Función existente para obtener películas populares
export const getPopularMovies = async (language = 'es-MX') => {
  try {
    const response = await tmdbApi.get('/movie/popular', {
      params: { language }
    });
    return response.data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      image: movie.poster_path ? `${baseUrl}${movie.poster_path}` : null,
      description: movie.overview,
      year: movie.release_date ? movie.release_date.substring(0, 4) : 'N/A',
      rating: movie.vote_average
    }));
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

// Nueva función para obtener películas de tendencia
export const getTrendingMovies = async (language = 'es-MX') => {
  try {
    const response = await tmdbApi.get('/trending/movie/week', {
      params: { language }
    });
    return response.data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      image: movie.poster_path ? `${baseUrl}${movie.poster_path}` : null,
      description: movie.overview,
      year: movie.release_date ? movie.release_date.substring(0, 4) : 'N/A',
      rating: movie.vote_average
    }));
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

// Nueva función para obtener películas mejor calificadas
export const getTopRatedMovies = async (language = 'es-MX') => {
  try {
    const response = await tmdbApi.get('/movie/top_rated', {
      params: { language }
    });
    return response.data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      image: movie.poster_path ? `${baseUrl}${movie.poster_path}` : null,
      description: movie.overview,
      year: movie.release_date ? movie.release_date.substring(0, 4) : 'N/A',
      rating: movie.vote_average
    }));
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
    return [];
  }
};

