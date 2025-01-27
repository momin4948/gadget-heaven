import { useLoaderData } from "react-router-dom";

const Accessories = () => {
    const products = useLoaderData();

    const accessories = products.filter( product => product.category === 'accessories' ) ;

    if(accessories.length === 0){
        return(
            <div className="flex flex-col ">
               <img className=" ml-[20%] w-4/12" src="istockphoto-1415203156-612x612.jpg" alt="oops" />
               <h3 className="text-2xl font-bold ml-[20%]">Ooops!!! No Products Available</h3>
            </div>
        )
    }

    else{
        return (
            <div>
                data
            </div>
        );
    }
};

export default Accessories;