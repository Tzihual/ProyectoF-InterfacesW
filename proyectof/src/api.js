import axios from 'axios';

// Configura una instancia de axios con configuraciones predeterminadas
const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'edc46c3cf1b7f1468d46bc4750279f43',  // Clave real obtenida
    language: 'es-MX'  // Puedes cambiar esto a 'en-US' si prefieres resultados en inglés
  }
});

export default tmdbApi;
