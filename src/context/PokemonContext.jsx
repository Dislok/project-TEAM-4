import React, { createContext, useState, useContext, useEffect } from 'react';

const PokemonContext = createContext();

export const usePokemon = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await response.json();
        
        const pokemonDetails = await Promise.all(data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        }));
        
        setPokemon(pokemonDetails);
        setLoading(false);
      } catch (error) {
        console.error("Error Cargando los Pokemones:", error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemon, loading }}>
      {children}
    </PokemonContext.Provider>
  );
};