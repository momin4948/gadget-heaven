import { useLoaderData } from "react-router-dom";
import WearableCard from "./WearableCard";


const Wearable = () => {

    const products = useLoaderData();

    const wearables = products.filter(product => product.category === 'Wearable');

    return (
       
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-self-center gap-8">
                {
                    wearables.map((wearable, idx) => <WearableCard key={idx} wearable={wearable}></WearableCard>)
                }
            </div>
       
    );
};

export default Wearable;