import { useLoaderData } from "react-router-dom";
import MacbookCard from "./MacbookCard";


const Macbook = () => {
    const products = useLoaderData();

    const macbooks = products.filter( product => product.category === 'Macbook' ) ;
    return (
        <div>
            {
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-self-center gap-8">
                 {
                  macbooks.map((macbook,idx) => <MacbookCard key={idx} macbook={macbook}></MacbookCard>)
                 }
              </div>
            }
        </div>
    );
};

export default Macbook;