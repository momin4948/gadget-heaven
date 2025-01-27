import { useLoaderData } from "react-router-dom";
import PhoneCard from "./PhoneCard";


const Phone = () => {
    const products = useLoaderData();

    const phones = products.filter( product => product.category === 'Phone' ) ;
        

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-self-center gap-8">
           {
            phones.map((phone,idx) => <PhoneCard key={idx} phone={phone}></PhoneCard>)
           }
        </div>
    );
};

export default Phone;