import Home from '../pages/Home';
import Product from '../pages/Product';
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import App from "../App";
export const Routes = [
    {
        index: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
                index: true
            },
            {
                path: "/produk",
                element: <Product />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]