import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MovieForm from './components/MovieForm';
import ListaReseña from './paginas/ListaReseña';
import PaginaDeInicio from './paginas/PaginaDeInicio';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [activeView, setActiveView] = useState('home');

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
    setActiveView('list');
  };


  return (
    <div className="App">
      <Navbar onSwitchView={setActiveView} />
      {activeView === 'home' && <PaginaDeInicio />}
      {activeView === 'create' && <MovieForm onAddMovie={addMovie} />}
      {activeView === 'list' && <ListaReseña movies={movies} />}
    </div>
  );
};

export default App;
