import React from 'react';
import Pokemon from '../../components/pokemon';
import Service from '../../services/pokemon-api';
import Button from 'react-bootstrap/Button';
import { AppContext } from '../../app-context';

import { useState, useContext } from 'react';

const PokemonPage = () => {
  const [response, setResponse] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

	const [store, setStore] = useContext(AppContext);

  const getPokemons = () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")
    const baseURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
      Service.getPokemonDetails(baseURL).then(pokemon => {
        const pokemonInfo = {
          abilities: pokemon.abilities,
          image: pokemon.sprites.front_default,
          id: pokemon.id,
          stats: pokemon.stats,
          height: pokemon.height,
          weight: pokemon.weight,
        }
        setResponse(pokemonInfo);
      }
    );
  }

  React.useEffect(() => {
    getPokemons();
  }, []);

  const handleCompare = () => {
    const aux = store.pokemones;
    aux.push(response);
    setStore({pokemones: aux});
  }

  const handleShowCompare = () => {
    setShowCompare(true);
  }

  return (
    <div className="pokemon-compare">
      <Pokemon {...response} />
      <div className="pokemon-compare__buttons">
        <Button variant="warning" onClick={() => handleCompare()}>Comparar</Button>
        <Button onClick={handleShowCompare} disabled={store.pokemones.length < 2} variant="success">Ver comparación</Button>
      </div>
      { showCompare && <div className="pokemon-compare__details">
        <h1 className="pokemon-logo__pogo">Comparación</h1>
        <div className="pokemon-compare__details-list">
          {store && store.pokemones && store.pokemones.map(pokemon => <Pokemon {...pokemon} />)}
        </div>
      </div> }
    </div>
  );
}

export default PokemonPage;
