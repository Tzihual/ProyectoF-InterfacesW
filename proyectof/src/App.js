import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MovieForm from './components/MovieForm';
import ListaReseña from './paginas/ListaReseña';
import PaginaDeInicio from './paginas/PaginaDeInicio';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import "./App.css";
import Footer from './components/Footer';

const App = () => {
  const defaultMovies = [
    { id: 1, title: 'Me before you', image: 'https://m.media-amazon.com/images/I/81aTCHD61EL._SY466_.jpg', rating: '5', reviews: 'Una película preciosa' },
    { id: 2, title: 'End Game', image: 'https://m.media-amazon.com/images/I/81Y9S4bq6-L.__AC_SX300_SY300_QL70_ML2_.jpg', rating: '5', reviews: 'Una obra maestra de acción y drama.' },
    { id: 3, title: 'We Live In Time', image: 'https://m.media-amazon.com/images/I/61RwbXRXdFL._AC_SX342_.jpg', rating: '3', reviews: 'Esperaba más, no fue lo que esperaba' }
  ];
  const [activeView, setActiveView] = useState('login'); // Vista actual
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de sesión
  const [currentUser, setCurrentUser] = useState(null); // Usuario actual
  const [movies, setMovies] = useState(defaultMovies); // Arreglo de películas
  const [users, setUsers] = useState([
    { username: 'admin', email: 'admin@example.com', password: 'admin' }, // Usuario inicial
  ]); // Arreglo de usuarios

  const handleLogin = (username, password) => {
    // Verifica si el usuario y contraseña son correctos
    const userExists = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userExists) {
      setIsLoggedIn(true);
      setCurrentUser(userExists); // Guarda al usuario actual
      setActiveView('home'); // Redirige a la página principal
      return true; // Login exitoso
    } else {
      return false; // Credenciales incorrectas
    }
  };

  const handleRegisterUser = (newUser) => {
    // Verifica si el usuario ya existe
    const userExists = users.find(
      (user) =>
        user.username === newUser.username || user.email === newUser.email
    );

    if (userExists) {
      alert('El usuario o el correo ya están registrados.');
      return false;
    }

    // Agrega el nuevo usuario al arreglo
    setUsers([...users, newUser]);
    return true;
  };

  const handleSwitchToSignUp = () => {
    setActiveView('signup'); // Cambia a registro
  };

  const handleSwitchToLogin = () => {
    setActiveView('login'); // Cambia a login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null); // Limpia el usuario actual
    setActiveView('login'); // Redirige al login
  };

  // Añadir reseña
  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: Date.now() }]); // Genera un ID único con Date.now()
    setActiveView('list');
  };

  // Eliminar reseña
  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const editMovie = (updatedMovie) => {
    console.log("Before update", movies);
    const newMovies = movies.map(movie => 
      movie.id === updatedMovie.id ? updatedMovie : movie
    );
    setMovies(newMovies);
    console.log("After update", newMovies);
  };
  
  return (
    <div className="App">
      {!isLoggedIn ? (
        activeView === 'login' ? (
          <LoginForm onLogin={handleLogin} onSwitchView={handleSwitchToSignUp} />
        ) : (
          <SignUpForm
            onSwitchToLogin={handleSwitchToLogin}
            onRegisterUser={handleRegisterUser}
          />
        )
      ) : (
        <>
          <Navbar
            onSwitchView={setActiveView}
            currentUser={currentUser} // Pasamos el usuario actual
            onLogout={handleLogout} // Pasamos la función de cerrar sesión
          />
          {activeView === 'home' && <PaginaDeInicio />}
          {activeView === 'create' && <MovieForm onAddMovie={addMovie} />}
          {activeView === 'list' && (
            <ListaReseña 
              movies={movies} 
              onDelete={deleteMovie} 
              onEdit={editMovie}
            />
          )}
        </>
      )}
      <br></br><br></br>
      <Footer/>
      <br></br>
    </div>
  );
};

export default App;
