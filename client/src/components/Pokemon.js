import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import favoriteContext from '../Context/favoriteContext'

const Pokemon = (props) => {
    const { favoritePokemons, updateFavoritePokemons } = useContext(favoriteContext);
    const { pokemon } = props
    const onHeartClick = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name);
    }
    const redHeart = "❤️";
    const blackHeart = "🖤";
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart
    return (

        <>
            {pokemon.id <= 650 ?
                <Link style={{textDecoration: 'none'}} to={`/detail/` + pokemon.id} props={pokemon} >
                    <div className={`pokemon-card ${pokemon.types[0].type.name}`}>
                        <div className='pokemon-image-container'>
                            <img className='pokemon-img' src={pokemon.sprites.front_default} alt={pokemon.name} />
                        </div>
                        <div className='card-body'>
                            <div className='card-top'>
                                <h3>{pokemon.name}</h3>
                                <p>#{pokemon.id}</p>
                            </div>
                            <div className='card-bottom'>
                                <div className='pokemon-type'>
                                    {pokemon.types.map((type, index) => {
                                        return (
                                            <div key={index} className={`pokemon-type-text ${type.type.name}`} ><p>{type.type.name}</p></div>
                                        )
                                    })}
                                </div>
                                <button className='pokemon-heart-btn' onClick={onHeartClick}>{heart}</button>
                            </div>
                        </div>
                    </div>
                </Link>:<div></div>
        }
        </>
    )
}

export default Pokemon
