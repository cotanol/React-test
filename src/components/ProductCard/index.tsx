import { IProduct } from "../../types/product";
import { Link } from "react-router-dom";


function ProductCard({images, title, price, id}: IProduct) {

    return (

        <div className="product-card mb-10">
            <div className="product-image">
                <img src={images[0]} alt="Imagen de Prueba" className="rounded-3xl max-w-80"/>
            </div>

            <div className="product-info mt-2">
                <h3 className="font-bold">
                    <Link to={`/products/${id}`}>{title}</Link>
                </h3>
                <p className="font-semibold">${price}</p>
            </div>

        </div>

    );

}

export default ProductCard;
