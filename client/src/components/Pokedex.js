import React from 'react'
import Loading from './Loading';
import Pagination from './Pagination';
import Pokemon from './Pokemon';
import SearchBar from './SearchBar';

const Pokedex = (props) => {
    const { pokemons, loading, setPage, page, totalPages } = props;
    const onLeftClickHandler = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }
    const onRigthClickHandler = () => {
        if (page + 1 !== totalPages) {
            setPage(page + 1)
        }
    }
    return (
        <div className='pokedex'>
            <div className='pokedex-top'>
            <SearchBar onSearch={props.onSearch} />
                <img
                    className='home-img'
                    src='./pokedex.png'
                    alt='pokedex-logo'
                />
                <Pagination
                    page={page + 1}
                    totalPages={totalPages}
                    onLeftClick={onLeftClickHandler}
                    onRigthClick={onRigthClickHandler}
                />
            </div>
            {loading ? (
                <Loading/>
            ) : (
                <div className='pokedex-list'>
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
