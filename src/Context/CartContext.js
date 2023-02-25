import React, { createContext, useState } from 'react'

export const CartContext = createContext('');

const CarritoContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const limpiarCarrito = () => setCarrito([])

    const isInCarrito = (id) => {
        return carrito.find((producto) => producto.item.id === id) ? true : false;
    }

    const borrarProducto = (id) => {
        let deleteProd = carrito.filter((item) => item.item.id !== id)
        setCarrito(deleteProd)
    }


    const onAddProducto = (item, quantity) => {
        if (isInCarrito(item.item.id)) {
            setCarrito(carrito.map((producto) => {
                return producto.id === item.id ? { ...producto, quantity: producto.quantity + quantity } : producto
            }));
        } else {
            setCarrito([...carrito, { ...item, quantity }])
        }
    }

    const validarFormulario = (campos) => {
        return campos.some((campo) => campo === "")
    }

    const totalCompra = () => {
        return carrito.reduce((sumaTotal, producto) => sumaTotal + producto.item.precio * producto.quantity, 0)
    }

    const totalProductos = () => carrito.reduce((sumaTotal, productoActual) => sumaTotal + productoActual.quantity, 0)

    return (
        <CartContext.Provider value={{
            totalCompra,
            totalProductos,
            onAddProducto,
            limpiarCarrito,
            isInCarrito,
            borrarProducto,
            validarFormulario,
            carrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CarritoContextProvider