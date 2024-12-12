// src/paginas/PaginaDeInicio.js
import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import { getPopularMovies, getTrendingMovies, getTopRatedMovies } from '../servicios/servicioPeliculas';

const PaginaDeInicio = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [tendencias, setTendencias] = useState([]);
  const [mejorCalificadas, setMejorCalificadas] = useState([]);

  useEffect(() => {
    const cargarDatos = async () => {
      const peliculasPopulares = await getPopularMovies();
      const peliculasDeTendencia = await getTrendingMovies();
      const peliculasMejorCalificadas = await getTopRatedMovies();
      setPeliculas(peliculasPopulares);
      setTendencias(peliculasDeTendencia);
      setMejorCalificadas(peliculasMejorCalificadas);
    };

    cargarDatos();
  }, []);

  return (
    <div>
      <h2>Tendencias</h2>
      <Carousel movies={tendencias} />
      <br></br><br></br>
      <h2>Lo más popular</h2>
      <Carousel movies={peliculas} />
      <br></br><br></br>
      <h2>Mejor calificadas</h2>
      <Carousel movies={mejorCalificadas} />
    </div>
  );
};

export default PaginaDeInicio;


