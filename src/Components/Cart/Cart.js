import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import ItemCart from './ItemCart'
import '../Style/cart.css'
import Form from '../Form'

const Cart = (item) => {
    const { carrito, totalCompra } = useContext(CartContext)


    if (carrito.length === 0) {
        return (
            <>
                <div className='empityCart empty'>
                    <h2 className='tittleEmpity'>No hay productos en el carrito</h2>
                    <Link className='btn btn-outline-warning' to='/'>Volver al Home</Link>
                </div>
            </>
        );
    }

    return (
        <>
            <div className='container'>
                <section className='mainCart'>
                    <h2 className='cartH2'>Carrito de compras</h2>
                    <div className='cartProducts'>
                        {carrito.map((product) => <ItemCart product={product} key={product.id} />)}
                    </div>
                </section>
                <section className='formContainer'>
                    <h4 className='tittleForm'>Detalle de Compra</h4>
                    <div className='totalCart'>
                        <p className='totalCart-p'>Total compra
                            <span> USD $ {totalCompra()}</span>
                        </p>
                    </div>
                    <Form />
                </section>
            </div>
        </>
    )
}

export default Cart