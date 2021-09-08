import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { pokemonAPI } from "../services/api";
import './styles.css';

interface IPokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}

function Main() {

  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {

    async function loadPokemonData() {
      try {
        const { data } = await pokemonAPI.get('/pokemon');

        setPokemons(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemonData();
  }, []);

  return (
    <div className="container-main">
      {pokemons.map(pokemon => (
        <Card item={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
}

export default Main;
