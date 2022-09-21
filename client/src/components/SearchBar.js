import React, { useState } from 'react'

const SearchBar = (props) => {
    const [search, setSearch]  = useState("Charlizard")
    const {onSearch} = props

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0){
            onSearch(undefined)
        }
    }

    const onSeacrhClickHandler = () => {
        onSearch(search)
    }

    return (
        <div className='search-container'>
            <div className='search'>
                <input placeholder='Buscar Pokemon...' onChange={onChangeHandler}></input>               
            </div>
            <div className='search-btn'>
                <button onClick={onSeacrhClickHandler}>Buscar</button>
            </div>
            
        </div>
    )
}

export default SearchBar
