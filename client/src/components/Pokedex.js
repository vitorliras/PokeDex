import React from 'react'
import Pagination from './Pagination';
import Pokemon from './Pokemon';

const Pokedex = (props) => {
    const { pokemons, loading, setPage, page, totalPages } = props;
    const onLeftClickHandler = () => {
        if(page > 0){
            setPage(page-1)
        }
    }
    const onRigthClickHandler = () => {
        if(page+1 !== totalPages){
            setPage(page+1)
        }
    }
    return (
        <div>
            <div className='pokedex-home'>
                <h1>Pokedex</h1>
                <Pagination
                    page={page + 1}
                    totalPages={totalPages}
                    onLeftClick={onLeftClickHandler}
                    onRigthClick={onRigthClickHandler}
                />
            </div>
            {loading ? (
                <div>Carregando...</div>
            ) : (
                <div className='pokedex'>
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon key={index} pokemon={pokemon} />
                        )
                    })}
                </div>
            )
            }
        </div>
    )
}

export default Pokedex
