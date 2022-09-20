import React, { useState } from 'react'
import {searchPokemon} from "../api"

const SearchBar = (props) => {
    const [pokemon, setPokemon] = useState()
    const [search, setSearch]  = useState("Charlizard")

    const onChangeHandler = (e) => {
        console.log("Pokemon: ", e.target.value)
        setSearch(e.target.value)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        console.log(result)
        setPokemon(result)
      }

    const onSeacrhClickHandler = () => {
        onSearchHandler(search)
    }

    return (
        <div className='search-container'>
            <div className='search'>
                <input placeholder='Buscar Pokemon...' onChange={onChangeHandler}></input>               
            </div>
            <div className='search-btn'>
                <button onClick={onSeacrhClickHandler}>Buscar</button>
            </div>
            {pokemon ? (
                <div>
                    <div>Nome: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                </div>
            ): ""}
        </div>
    )
}

export default SearchBar
