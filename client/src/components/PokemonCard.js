import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import FavoriteContext from '../Context/favoriteContext';
import ProgressBar from './ProgressBar';


const PokemonCard = (props) => {
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);
  const { pokemons } = props
  const onHeartClick = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemons.name);
  }
  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemons.name) ? redHeart : blackHeart
  console.log(pokemons)
  return (
    <div>
      <div className={`my-5 container-card ${pokemons.types && pokemons.types[0].type.name}`}>
        <div className='top-card'>
          <div className='firts-card'>
            <NavLink exact to="/home">
              <div className='ArrowBackIosIcon' fontSize="large" />
            </NavLink>
            <div>
              {" "}
              <button className='favorite-card' onClick={onHeartClick}>
                <p>{heart}</p>
              </button>
            </div>
          </div>
          <div className='second-card'>
            <div className='name-card'>
              <h1>{pokemons.name}</h1>
              <div className='pokemon-type-card'>
                {pokemons.types && pokemons.types.map((type, index) => {
                  return (
                    <div key={index} className={`pokemon-type-text-card ${type.type.name}`} id={type.type.name} ><p>{type.type.name}</p></div>
                  )
                })}
              </div>
            </div>
            <div className='id-card'>#{pokemons.id}</div>
          </div>
          <img className='img-card' src={`../pokedex/${pokemons.id}.png`} />
          {/* <img className='img-card' src={pokemons.sprites.front_default} alt={pokemons.name} /> */}
        </div>
        <div className='bottom-card'>
          <div className='B1-card'>
            <h2>Status</h2>
          </div>

          {pokemons.stats &&
            pokemons.stats.map((stat, idx) => {
              return (
                <ProgressBar
                  key={idx}
                  title={stat.stat.name}
                  width={stat.base_stat}
                  text={stat.base_stat}
                />
              );
            })}
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
