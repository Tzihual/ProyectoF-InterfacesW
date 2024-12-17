import React, { useState } from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 30px auto;
 background:linear-gradient(to bottom, #B22222, #8B0000);
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
  color: white;
  font-size: 14px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
   background-color: #FFD700; 
color: #000000; 
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  box-sizing: border-box;

   &:hover {
    background-color: #DAA520;
    transform: translateY(-2px);
  }
`;

const Texto = styled.textarea`
  width: 100%;
  height: 50px;
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

const Titulo = styled.h2`
  color: white;
`;

const MovieForm = ({ onAddMovie }) => {
  const [movie, setMovie] = useState({
    title: '',
    image: '',
    rating: 0,
    reviews: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({
      ...movie,
      [name]: value
    });
  };

  const handleRatingChange = (newRating) => {
    setMovie({
      ...movie,
      rating: newRating, // Actualizamos la calificación seleccionada
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie.title && movie.image && movie.rating && movie.reviews) {
      onAddMovie(movie);
      setMovie({ title: '', image: '', rating: 0, reviews: '' });
  
    }
  };

  return (
    <FormContainer>
      <Titulo>Añadir Reseña</Titulo>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="title">Nombre de la película</Label>
          <Input
            id="title"
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
            placeholder="Ingresa el título de la película"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="image">Imagen</Label>
          <Input
            id="image"
            type="text"
            name="image"
            value={movie.image}
            onChange={handleChange}
            placeholder="Ingresa la imagen de la película"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="rating">Calificación</Label>
          <ReactStars
            count={5}
            value={movie.rating} // Valor actual de la calificación
            onChange={handleRatingChange} // Maneja el cambio de calificación
            size={30}
            activeColor="#FFD700"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="reviews">Crítica</Label>
          <Texto
            id="reviews"
            name="reviews"
            onChange={handleChange}
            value={movie.reviews}
            rows={5}
            placeholder="Escribe tu reseña de la película..."
          />
        </InputGroup>
        <Button type="submit">Añadir</Button>
      </form>
    </FormContainer>
  );
};

export default MovieForm;