import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import useFirebase from '../Hooks/useFirebase'
import Swal from 'sweetalert2'
import './Style/form.css'



const Form = () => {


    const { getTicket } = useFirebase()
    const { limpiarCarrito, validarFormulario } = useContext(CartContext)
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: '',

    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("form", formData.nombre)
        if (validarFormulario([formData.nombre, formData.apellido, formData.email, formData.telefono, formData.mensaje])) {
            Swal.fire({
                title: "Oops!",
                text: "Debe completar todos los campos",
                icon: "error",
            });
            return;
        }
        Swal.fire({
            title: "Genial!",
            text: `Orden generada correctamente`,
            timerProgressBar: true,
            showConfirmButton: true,
            confirmButtonText: 'Ver orden',
            icon: "success",
        });
        getTicket({ datos: formData });
        limpiarCarrito();
    };

    return (
        <>
            <form className='form-cart' onSubmit={onSubmit}>
                <input
                    className='form-text'
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                />
                <input
                    className='form-text'
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                />
                <input
                    className='form-text'
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    className='form-text'
                    type="text"
                    name="telefono"
                    placeholder="Telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                />
                <textarea
                    className='form-text'
                    type="text"
                    name="mensaje"
                    placeholder="Escriba su mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                />
                <button className='btn btn-success' type="submit">Terminar compra</button>
                <Link to="/" className="btn btn-warning">Volver a comprar</Link>
                <button className='btn btn-danger' onClick={() => limpiarCarrito()}>Vaciar el carrito </button>
            </form>
        </>
    );
}

export default Form