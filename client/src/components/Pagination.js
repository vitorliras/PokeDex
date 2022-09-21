import React from 'react'

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRigthClick} = props
  return (
    <div className='pagination-container'>
      <button onClick={onLeftClick}><div>◀</div></button>
      <div>{page} de {totalPages}</div>
      <button onClick={onRigthClick}><div>▶</div></button>
    </div>
  )
}

export default Pagination
