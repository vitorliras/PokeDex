import React from 'react'

const Pokedex = (props) => {
    const { pokemons, loading } = props;
    return (
        <div>
            <div className='pokedex-home'>
                <h1>Pokedex</h1>
                <div>Paginação: </div>
            </div>
            {loading ? (
                <div>Carregando...</div>
            ) : (
                <div className='pokedex-card'></div>
            )
            }
        </div>
    )
}

export default Pokedex
