import React, { useContext } from 'react'
import favoriteContext from '../Context/favoriteContext'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const { favoritePokemons } = useContext(favoriteContext)
    const path = window.location.pathname
    return (
        <nav className='nav-header'>
            <div>
                <NavLink exact to="/">
                    <img
                        className='navbar-img'
                        src='./logoPokeApi.png'
                        alt='pokeapi-logo'
                    />
                </NavLink>
            </div>
            <div class="child-to-body box">

                <div class="box child-to-body">

                    <div class="poke_box">

                        <div class="pokeball">

                            <div class="pokeball__button"></div>

                        </div>

                    </div>

                </div>
            </div>
            <div className='heart-nav btn1'><button>❤️{favoritePokemons.length} FAVORITE</button></div>
        </nav>
    )
}

export default NavBar
