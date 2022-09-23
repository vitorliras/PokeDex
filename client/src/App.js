import React, { useState, useEffect } from 'react'

import './App.css';
import './stylesheets/nav.css';
import './stylesheets/search.css';
import './stylesheets/pokedex.css';
import './stylesheets/pagination.css';
import './stylesheets/background-type.css';
import './stylesheets/pokebola.css';
import './stylesheets/footer.css';

import { Route, Routes, BrowserRouter } from 'react-router-dom'

import { FavoriteProvider } from './Context/favoriteContext';
import Home from './pages/home';

const favoriteKey = "f"
function App() {
  const [favorites, setFavorites] = useState([]);

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoriteKey)) || []
    setFavorites(pokemons)
  }
  useEffect(() => {
    loadFavoritePokemons();
  }, [])

  const updateFavoritePokemon = (name) => {
    const updated = [...favorites];
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name)
    }
    window.localStorage.setItem(favoriteKey, JSON.stringify(updated))
    setFavorites(updated)
  }

  return (
    <FavoriteProvider value={{
      favoritePokemons: favorites,
      updateFavoritePokemons: updateFavoritePokemon
    }} >
      <BrowserRouter>

        <Routes>
          <Route path='/'  element={<Home/>}/>

        </Routes>

      </BrowserRouter>

    </FavoriteProvider>
  );
}

export default App;
