import React from 'react'

const ItemCategoria = ({iconocat, nombreCat}) => {// props = {iconoCat, nombreCat} 
  return (
    <div> 
      <span className={`fa ${iconocat}`}></span> // props.iconoCat
        <h4>{nombreCat}</h4>
    </div>

  )
}

export default ItemCategoria