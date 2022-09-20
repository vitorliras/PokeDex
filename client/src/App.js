import React, { useState, useEffect } from 'react'

import './App.css';
import './stylesheets/nav.css';
import './stylesheets/search.css';
import './stylesheets/pokedex.css';

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Pokedex from './components/Pokedex';
import { getPokemons } from './api';

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const result = await getPokemons();
      setPokemons(result)
      setLoading(false)
    } catch (error) {
      console.log("Fetch pokemon error: ", error)
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [pokemons])

  return (
    <div>

      <NavBar />
      <SearchBar />
      <Pokedex pokemons={pokemons} loading={loading}/>

    </div>
  );
}

export default App;
