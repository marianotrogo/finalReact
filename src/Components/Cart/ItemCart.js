import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
const ItemCart = (item) => {

	const { product: { item: { name, precio, img, alt, id }, quantity } } = item
	const { borrarProducto } = useContext(CartContext)

	return (
		<>
			<ol class="list-group list-group-numbered">
				<li class="list-group-item d-flex justify-content-between align-items-start">
					<div class="ms-2 me-auto">
						<div class="fw-bold">{name}</div>
						<img src={img} alt={alt || 'Imagen del producto'} style={{ width: '150px' }} />
						<h4 className="card-text">U$D: {precio}</h4>
						<button className='btn btn-outline-dark ' onClick={() => borrarProducto(id)}>Eliminar</button>
					</div>
					<span class="badge bg-primary rounded-pill">{quantity} Un.</span>
				</li>
			</ol>
		</>
	)
}

export default ItemCart
