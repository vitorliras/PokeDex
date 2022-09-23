import React from 'react'

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRigthClick} = props
  return (
    <div className='pagination-container'>
      <button onClick={onLeftClick}><div className='arrow'>◀</div></button>
      <div className='pagination-text'><p>{page} de {totalPages}</p></div>
      <button onClick={onRigthClick}><div className='arrow'>▶</div></button>
    </div>
  )
}

export default Pagination
