import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 30px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  box-sizing: border-box;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  transition: border 0.3s, box-shadow 0.3s;
  box-sizing: border-box;
  
  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 8px rgba(52, 152, 219, 0.3);
  }
`;

const Label = styled.label`
  font-weight: bold;
  color: #333;
  font-size: 14px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  box-sizing: border-box;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
`;

const MovieForm = ({ onAddMovie, onEditMovie, movieToEdit }) => {
  const [movie, setMovie] = useState({
    title: '',
    genre: '',
    year: '',
    image: ''
  });

  useEffect(() => {
    if (movieToEdit) {
      setMovie(movieToEdit);
    }
  }, [movieToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({
      ...movie,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie.title && movie.genre && movie.year && movie.image) {
      if (movieToEdit) {
        onEditMovie(movie);
      } else {
        onAddMovie(movie);
      }
      setMovie({ title: '', genre: '', year: '', image: '' });
    }
  };

  return (
    <FormContainer>
      <h2>{movieToEdit ? "Editar Película" : "Agregar Nueva Película"}</h2>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="title">Título</Label>
          <Input
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
            placeholder="Ingresa el título de la película"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="genre">Género</Label>
          <Input
            type="text"
            name="genre"
            value={movie.genre}
            onChange={handleChange}
            placeholder="Ingresa el género de la película"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="year">Año</Label>
          <Input
            type="text"
            name="year"
            value={movie.year}
            onChange={handleChange}
            placeholder="Ingresa el año de estreno"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="image">Imagen URL</Label>
          <Input
            type="text"
            name="image"
            value={movie.image}
            onChange={handleChange}
            placeholder="Ingresa la URL de la imagen"
          />
        </InputGroup>
        <Button type="submit">{movieToEdit ? "Actualizar" : "Agregar"}</Button>
      </form>
    </FormContainer>
  );
};

export default MovieForm;



