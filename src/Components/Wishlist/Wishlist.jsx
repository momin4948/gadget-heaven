import { useLoaderData } from "react-router-dom";
import { getStoredWishList } from "../../Utility/addtoDb";
import { useEffect, useState } from "react";
import ListedProducts from "../Listedproducts/ListedProducts";

const Wishlist = () => {
    const products = useLoaderData() ;

    const [ listedProducts , setListedProduct ] = useState([]) ;

    useEffect(()=>{
        const storedWishList = getStoredWishList();
        
        const wishedProducts = products.filter(product => storedWishList.includes(product.product_id))

        setListedProduct(wishedProducts)
        
    },[products]) ; 


    
    
    return (
        <div className="lg:my-8 mx-auto w-11/12">
            <div className="">
                <h4 className="font-[700] text-2xl">Wish-list</h4>
            </div>
            <div className="lg:my-8 mx-auto ">
                {
                  listedProducts.map((product,idx) => <ListedProducts key={idx} product={product}></ListedProducts>) 
                }
            </div>
        </div>
    );
};

export default Wishlist;