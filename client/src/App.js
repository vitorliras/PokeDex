import React, { useState, useEffect } from 'react'

import './App.css';
import './stylesheets/nav.css';
import './stylesheets/search.css';
import './stylesheets/pokedex.css';
import './stylesheets/pagination.css';

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Pokedex from './components/Pokedex';
import { getPokemons, getPokemonsData } from './api';
import { FavoriteProvider } from './Context/favoriteContext';

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const itensPerPage = 24;

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url)
      });

      const result = await Promise.all(promises)
      setPokemons(result)
      setLoading(false)
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log("Fetch pokemon error: ", error)
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [page])

  const updateFavoritePokemon = (name) => {
    const updated = [...favorites];
    const isFavorite = updated.indexOf(name);
    if(isFavorite >=0){
        updated.splice(isFavorite, 1);
    }else{
        updated.push(name)
    }
    setFavorites(updated)
  }

  return (
    <FavoriteProvider value={{
      favoritePokemons: favorites,
      updateFavoritePokemons: updateFavoritePokemon
      }} >
    <div>
      <NavBar />
      <SearchBar />
      <Pokedex pokemons={pokemons} loading={loading} setPage={setPage} page={page} totalPages={totalPages} />

    </div>
    </FavoriteProvider>
  );
}

export default App;
