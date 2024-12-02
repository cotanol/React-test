// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/error-page';
import ProductDetailPage from './pages/product-detail-page';
import { ShoppingCartProvider } from './context';

const router = createBrowserRouter ([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "products/:id",
        element: <ProductDetailPage/>
    }
]);

createRoot(document.getElementById('root')!).render(
    <ShoppingCartProvider>
        <RouterProvider router={router}/>
    </ShoppingCartProvider>
); // Renderizamos el router
