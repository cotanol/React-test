
// import Button from "./components/Button";
// import Mensaje from "./components/Welcome";
// import ThemeSwitcher from "./components/DarkMode";
// import ColoresBackground from "./components/Background";
import ProductCard from "./components/ProductCard";
import { useContext } from "react";
import { API_URL } from "./utils";
import { ShoppingCartContext } from "./context";
import { useFetch } from "./hooks/useFetch";
import { IProduct } from "./types/product";



function App() {

  const context = useContext(ShoppingCartContext);

  const URL = `${API_URL}/products`;
  const {data, loading, error} = useFetch<IProduct[]>(URL);

  if(loading) return <p>Cargando...</p>
  if(error) return <p>Error: {error}</p>

  return (
    <>
      <div>
        Items en el carrito: {context.count}
      </div>
      <div>
        {data?.map(product => (<ProductCard  key={product.id} {...product} />))}
      </div>
    </>
    
  );
        
}

export default App
