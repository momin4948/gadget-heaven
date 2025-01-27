import PropTypes from "prop-types";
import Product from "../Product/Product";
import { useLoaderData } from "react-router-dom";

const Products = () => {

    const allProducts = useLoaderData() ;
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-self-center gap-8">
            
           {
            allProducts.map((product,idx) => <Product key={idx} product={product}></Product>)
           }
        </div>
    );
};

Products.propTypes= {
 products : PropTypes.array,
} 

export default Products;