import React from 'react'
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import Item from './Item';
import useFirebase from '../Hooks/useFirebase'
import './Style/ItemList.css'

const ItemList = () => {

    const { categoria } = useParams()
    const { catalogo, loading } = useFirebase()
    const filter = categoria ? catalogo.filter((product) => product.categoria === categoria) : catalogo


    return (
        <section>
            {catalogo.length < 1}
            {loading && <Spinner />}
            <div className='container d-flex justify-content-center align-items-center h-100 w-100'>
                <div className='row wrap'>
                {!loading && catalogo.length > 0 ? filter.map(({ id, name, descripcion, precio, categoria, img, alt, stock }) => (
                    <Item
                        id={id}
                        key={id}
                        name={name}
                        descripcion={descripcion}
                        categoria={categoria}
                        precio={precio}
                        img={img}
                        alt={alt}
                        stock={stock}/>)
                ) : !loading && catalogo.length < 1 && (<h1 className="text-center text-red-800 text-xl">Ups!, fallo la carga de productos</h1>)
                }
                </div>
            </div>
        </section>
    )
}

export default ItemList

