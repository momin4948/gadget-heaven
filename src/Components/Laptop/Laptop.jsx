import { useLoaderData } from "react-router-dom";
import LaptopCard from "./LaptopCard";

const Laptop = () => {

    const products = useLoaderData();

    const laptops = products.filter(product => product.category === 'Laptop');


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-self-center gap-8">
           {
            laptops.map((laptop,idx) => <LaptopCard key={idx} laptop={laptop}></LaptopCard>)
           }
        </div>
        </div>
    );
};

export default Laptop;