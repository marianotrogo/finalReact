import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import './Style/itemdetail.css'


const ItemDetail = (item) => {
	const { name, descripcion, categoria, precio, img } = item

	return (
		<>
			<div className="card mb-3">
				<Link to='/' className='link-success backHome'>Regresar al Home</Link>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={img} className="img-fluid rounded-start" alt={name || "Imagen del producto"} />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{name}</h5>
							<p className="card-text">{descripcion}</p>
							<h5 className="card-text">Categoria: {categoria}</h5>
							<h4 className="card-text">U$D: {precio}</h4>
							<p className="card-text"><small className="text-muted"><ItemCount item={item} /></small></p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ItemDetail