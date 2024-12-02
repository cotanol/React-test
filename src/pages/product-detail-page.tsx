import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../utils";
import { ShoppingCartContext } from "../context";
import { useFetch } from "../hooks/useFetch";
import { IProduct } from "../types/product";

export default function ProductDetailPage () {

    const {id} = useParams()

    const URL = `${API_URL}/products/${id}`

    const {data, loading, error} = useFetch<IProduct>(URL);

    const context = useContext(ShoppingCartContext);


    if(loading) return <p>Cargando...</p>
    if(error) return <p>Error: {error}</p>

    const handleClick = () => {
        context.setCount(context.count + 1);
    }

    return (
        <>
            <button onClick={handleClick} className="underline text-blue-500">Agregar al carrito</button>
            <p>Cantidad de elementos en el carrito: {context.count}</p>
            <h1>{data?.title}</h1>
            <p>{data?.description}</p>
            <p>Precio: ${data?.price}</p>
            <img src={data?.images[0]} />

            <Link to="/">Volver al Inicio</Link>
        </>
        
    );
}