/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/Footer';
import favoriteContext from '../Context/favoriteContext'
import NavBar from '../components/NavBar';
import { searchPokemon, getPokemon } from "../api";
import Pokedex from '../components/Pokedex';
import Pokemon from '../components/Pokemon';

const favorite = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const { favoritePokemons } = useContext(favoriteContext)


    const fetchPokemons = async () => {
        try {
            setLoading(true);

            const promises = favoritePokemons.map(async (pokemon) => {
                return await searchPokemon(pokemon);
            });
            const results = await Promise.all(promises);
            setPokemons(results);
            setLoading(false);
            setTotal(Math.ceil(promises.length / promises.length));

        } catch (err) { }
    };

    useEffect(() => {

        fetchPokemons();
        console.log(favoritePokemons)
    }, [favoritePokemons]);

    const previousPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage)
    };

    const nextPage = () => {
        const nextPage = Math.min(page+1 , total);
        setPage(nextPage)
    };

    return (
        <div>
            <NavBar />
            <Pokedex page={page}
                totalPages={total}
                onLeftClick={previousPage}
                onRightClick={nextPage} />
            <div>
                <div className={`info ${favoritePokemons.length <= 6 ?('info-6') : ('info')}`}>
                    {pokemons.map((pokemon, idx) => {
                        return <Pokemon pokemon={pokemon} key={pokemon.name} />;
                    })}
                </div>
                {/* {favoritePokemons} */}
            </div>
            <Footer />
        </div>
    )
}

export default favorite
