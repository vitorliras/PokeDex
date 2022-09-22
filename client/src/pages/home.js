import React, { useState, useEffect } from 'react'

import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Pokedex from '../components/Pokedex';
import { getPokemons, getPokemonsData, searchPokemon } from '../api';


function Home() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [notFound, setNotFound] = useState([]);

  const itensPerPage = 24;

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      setNotFound(false)
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


  const onSearchHandler = async (pokemon) =>{
    if(!pokemon){
      return fetchPokemons()
    }
    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if(!result){
      setNotFound(true)
    }else{
      setPokemons([result])
      setPage(0)
      setTotalPages(1)
    }
    setLoading(false)
  }

  return (
    <div>
      <NavBar />
      <SearchBar onSearch={onSearchHandler} />
      {notFound ? (<div>ddd</div>) :(
      <Pokedex pokemons={pokemons} loading={loading} setPage={setPage} page={page} totalPages={totalPages} />
      )}
    </div>
  );
}

export default Home;
