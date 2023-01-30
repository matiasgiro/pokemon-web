import React from 'react';
import Header from '../../components/header';
import Pokemon from '../../components/pokemon';
import Service from '../../services/pokemon-api';
import { useState, useContext } from 'react';
import { AppContext } from '../../app-context';

const Home = () => {
  const [response, setResponse] = useState([]);
  const [responseFilter, setResponseFilter] = useState([]);
	const [ store, setStore ] = useContext(AppContext);

  const getPokemons = () => {
    const pokemonResponse = [];
    Service.getPokemonList().then(pokemonList => {
      if(pokemonList) {
        pokemonList.forEach(element => {
          Service.getPokemonDetails(element.url).then(pokemon => {
            const pokemonInfo = {
              name: element.name,
              abilities: pokemon.abilities,
              image: pokemon.sprites.front_default,
              id: pokemon.id,
              stats: pokemon.stats,
              height: pokemon.height,
              weight: pokemon.weight,
            }
            
            pokemonResponse.push(pokemonInfo);
            setResponse(pokemonResponse);
            setResponseFilter(pokemonResponse);
          });
        });
      }
    });
  }  
  
  React.useEffect(() => {
    console.log(store);
    getPokemons();
  }, []);

  const handleOnChange = (event) => {
    if (event.target.value) {
      const listFilter = response.filter(res => res.name.includes(event.target.value));
      setResponseFilter(listFilter);
    } else {
      setResponseFilter(response);
    }
  }

  return (
    <div className="App">
      <Header handleOnChange={handleOnChange} />
      <div className="pokemon-main">
        <p className="pokemon-logo__pogo">PoGO Guide Pokédex</p>
        <p className="pokemon-main__subtitle">Pokémon Go Pokédex</p>
        <p className="pokemon-main__paragraph">Select which Pokémon you need to capture, evolve, defeat in a gym battle, power up, compare, get higest HP and CP values, or their moves or to know more about...</p>
        {responseFilter.map(pokemon => (
          <Pokemon {...pokemon} />
        ))}
      </div>
    </div>
  );
}

export default Home;
