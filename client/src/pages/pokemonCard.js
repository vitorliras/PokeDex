/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import PokemonCard from '../components/PokemonCard';
import Footer from '../components/Footer';

const pokemonCard = () => {
    const [pokemons, setPokemons] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const searchPokemon = async (id) => {
        try {
            setLoading(false);
            let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
            const response = await fetch(url);
            const data = await response.json();

            console.log(data);
            setPokemons(data);
            setLoading(true);
        } catch (err) { }
    };
    useEffect(() => {
        searchPokemon(id);
      }, []);
    
    return (
        <div>
            <NavBar />
            <PokemonCard pokemons={pokemons} />
            <Footer/>
        </div>
    )
}

export default pokemonCard
