import React from 'react';
import './Style/Item.css'
import { Link } from 'react-router-dom';

const Item = (props) => {

	const { id, name, precio, img, categoria } = props;

	return (
		<div className='d-flex align-items-start p-2 col-xl-4'>
			<div className="card">
				<img src={img} className="card-img-top" alt={name || 'Imagen del producto'} />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">Categoria: {categoria}</p>
					<p className="card-text">{precio}</p>
					<Link to={`/item/detail/${id}`} className='btncart'>
						<p className="btn btn-primary">Ver detalle</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Item;