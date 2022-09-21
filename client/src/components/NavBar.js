import React, {useContext} from 'react'
import favoriteContext from '../Context/favoriteContext'

const NavBar = () => {
    const {favoritePokemons} = useContext(favoriteContext)
    return (
        <nav>
            <div>
                <img 
                className='navbar-img'
                src='./logoPokeApi.png'
                alt='pokeapi-logo'
                />
            </div>
            <div>❤️{favoritePokemons.length}</div>
        </nav>
    )
}

export default NavBar
