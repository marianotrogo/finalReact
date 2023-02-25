import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import './Style/itemcount.css'

const ItemCount = (item) => {

    const useContador = () => {

        const [count, setCount] = useState(1)

        const increase = () => setCount(count + 1)
        const decrease = () => setCount(count - 1)
        const reset = () => setCount(0)

        return {
            count,
            increase,
            decrease,
            reset
        }
    }

    const props = item.item;
    const { stock } = props;
    const { decrease, increase, count } = useContador()

    const [irACarrito, setIrACarrito] = useState(false);
    const { onAddProducto } = useContext(CartContext)
    const navigate = useNavigate();

    const onAdd = (quantity) => {
        setIrACarrito(true);
        onAddProducto(item, quantity)
    }

    return (
        <>
            <div className='itemCounDetail'>
                <div className='countDetail'>
                    <div className='contadorDetail'>
                        <button disabled={count <= 1} onClick={decrease} className='signoCounter'> - </button>
                        <h4 className='counterText'>{count}</h4>
                        <button disabled={count >= stock} onClick={increase} className='signoCounter'> + </button>
                    </div>
                    <button
                        disabled={stock <= 0}
                        onClick={() => onAdd(count)}
                        className='btn text-bg-success p-3'>
                        Agregar al Carrito
                    </button>
                </div>
                {
                    irACarrito ?
                        <div className='buttonCart'>
                            <Link onClick={() => navigate(-1)} item={item}><button className='btnCartCount checkOutButton'>Volver a comprar</button></Link>
                            <Link to='/cart' item={item}><button className='btnCartCount '>Finalizar compra</button></Link>
                        </div>
                        : null
                }
            </div>
        </>
    )
}

export default ItemCount