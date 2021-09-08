import axios from 'axios';

export const pokemonAPI = axios.create({
  baseURL: 'https://poke-dani.herokuapp.com/',
  timeout: 10000
});

