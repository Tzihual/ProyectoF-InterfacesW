import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MovieForm from './components/MovieForm';
import ListaReseña from './paginas/ListaReseña';
import PaginaDeInicio from './paginas/PaginaDeInicio';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [activeView, setActiveView] = useState('home');
  const [movieToEdit, setMovieToEdit] = useState(null);

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
    setActiveView('list');
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const editMovie = (updatedMovie) => {
    setMovies(movies.map(movie => movie.id === updatedMovie.id ? updatedMovie : movie));
    setMovieToEdit(null);
    setActiveView('list');
  };

  const handleEditInitiation = (movie) => {
    setMovieToEdit(movie);
    setActiveView('create');
  };

  return (
    <div className="App">
      <Navbar onSwitchView={setActiveView} />
      {activeView === 'home' && <PaginaDeInicio />}
      {activeView === 'create' && <MovieForm onAddMovie={addMovie} onEditMovie={editMovie} movieToEdit={movieToEdit} />}
      {activeView === 'list' && <ListaReseña movies={movies} onDelete={deleteMovie} onEdit={handleEditInitiation} />}
    </div>
  );
};

export default App;
