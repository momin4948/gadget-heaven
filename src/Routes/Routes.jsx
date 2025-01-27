import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Statistic from "../Pages/Statistic";
import Dashboard from "../Pages/Dashboard";
import Upcoming from "../Pages/Upcoming";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import Products from "../Components/Products/Products";
import Phone from "../Components/Phone/Phone";
import Laptop from "../Components/Laptop/Laptop";
import Macbook from "../Components/Macbook/Macbook";
import Wearable from "../Components/Wearable/Wearable";
import Accessories from "../Components/Wearable/Accessories";
import Cart from "../Components/Cart/Cart";
import Wishlist from "../Components/Wishlist/Wishlist";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [

                    {
                        path: '/Phone',
                        element: <Phone></Phone>,
                        loader: () => fetch('/Products.json')
                    },
                    {
                        path: '/Laptop',
                        element: <Laptop></Laptop>,
                        loader: () => fetch('/Products.json'),
                    },
                    {
                        path: '/Macbook',
                        element: <Macbook></Macbook>,
                        loader: () => fetch('/Products.json'),
                    },
                    {
                        path: '/Wearable',
                        element: <Wearable></Wearable>,
                        loader: () => fetch('/Products.json'),
                    },
                    {
                        path: '/Accessories',
                        element: <Accessories></Accessories>,
                        loader: () => fetch('/Products.json'),
                    },

                    {
                        path: '/',
                        element: <Products></Products>,
                        loader: () => fetch('/Products.json'),
                    },


                ]
            },

            {
                path: '/:product_category/products/:product_id',
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch('/Products.json')
            },

            {
                path: '/statistic',
                element: <Statistic></Statistic>
            },

            {
                path: '/upcoming',
                element: <Upcoming></Upcoming>,
                loader : () => fetch('/upcoming.json')
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: '/dashboard',
                        element: <Cart></Cart>,
                        loader : () => fetch ('/Products.json')

                    },
                    {
                        path: '/dashboard/wish-list',
                        element: <Wishlist></Wishlist>,
                        loader : () => fetch ('/Products.json')
                    },
                ],
            },
        ]
    },
]);


export default router