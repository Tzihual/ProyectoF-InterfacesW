import React from 'react';
import styled from 'styled-components';
import ReactStars from 'react-rating-stars-component';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 400px; /* Controla el tamaño máximo */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  box-sizing: border-box; /* Asegura que los inputs no se desborden */
  overflow: hidden; /* Evita cualquier desbordamiento inesperado */
`;


const CloseButton = styled.button`
  background: #ff6347;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  float: right;

  &:hover {
    background: #ff4500;
  }
`;

const SaveButton = styled.button`
  background-color: #0000CE;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #FF4500;
  }
`;
const FormField = styled.input`
  width: 100%; /* Ajusta al ancho del contenedor */
  max-width: 100%; /* Previene el desbordamiento */
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box; /* Considera padding y border en el ancho */
`;

const FormTextArea = styled.textarea`
  width: 100%; /* Ajusta al ancho del contenedor */
  max-width: 100%; /* Previene el desbordamiento */
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box; /* Considera padding y border en el ancho */
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: bold;
    color: #333;
  }
`;

const EditModal = ({ isOpen, onClose, movie, onSave }) => {
  const [title, setTitle] = React.useState(movie.title);
  const [image, setImage] = React.useState(movie.image);
  const [reviews, setReviews] = React.useState(movie.reviews);
  const [rating, setRating] = React.useState(movie.rating);

  const handleRatingChange = (newRating) => {
    setRating(newRating); // Actualiza el estado de rating cuando se cambian las estrellas
  };

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ ...movie, title,image, reviews, rating });
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h3>Editar Reseña</h3>
        <form>
            <FormGroup>
                <label>Título:</label>
                <FormField
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <label>Imagen de la película:</label>
                <FormField
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <label>Reseña:</label>
                <FormTextArea
                value={reviews}
                onChange={(e) => setReviews(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
            <label>Calificación:</label>
            <ReactStars
              count={10}
              value={rating}
              onChange={handleRatingChange}
              size={24}
              activeColor="#ffd700"
            />
          </FormGroup>
        </form>
        
        <SaveButton onClick={handleSave}>Guardar</SaveButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditModal;
