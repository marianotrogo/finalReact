import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';


const ItemListContainer = () => {
  const { id } = useParams();

  return (
    <div className='container row wrap text-center d-flex justify-content-center align-items-center h-100 w-100'>
      <div className='row justify-content-md-center'>
        <div >
          <ItemList item={id} />
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer