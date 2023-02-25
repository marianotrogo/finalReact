import React from 'react'
import { useEffect } from 'react';
import {  useParams } from 'react-router-dom'
import useFirebase from '../Hooks/useFirebase';
import ItemDetail from './ItemDetail'
import Spinner from './Spinner';
import './Style/Itemdetailcontainer.css'

const ItemDetailContainer = () => {

    const { id } = useParams()
    const { getProductos, catalogo, loading } = useFirebase()


    useEffect(() => {
        getProductos(id)
    
        return () => {
            
    }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    

    const filter = id? catalogo.filter((producto) => producto.id === id) : null

    return (
        <>
            <section className='container'>
                {loading && <Spinner/>}
                    {filter.map(({id, name, stock, descripcion, categoria, precio, img}, index) => (
                        <div className='d-flex'>
                            <ItemDetail
                            key={index}
                            id={id}
                            name={name} 
                            descripcion={descripcion}
                            precio={precio}
                            img={img}
                            categoria={categoria}
                            stock={stock}
                            />
                        </div>
                    ))}
            </section>
        </>
        
    )
}

export default ItemDetailContainer