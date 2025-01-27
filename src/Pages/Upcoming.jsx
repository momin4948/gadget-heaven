import { useLoaderData } from "react-router-dom";
import UpcomingProduct from "../Components/upcomingProduct/UpcomingProduct";



const Upcoming = () => {
    const upcomingProduct = useLoaderData();
    console.log(upcomingProduct);
    return (
        <div>
            <div className=" bg-purple-500 lg:w-11/12 mx-auto space-y-4 text-center lg:py-16 p-8">
                <h3 className="text-white/75 text-3xl font-[700]">Upcoming!!!</h3>
                <p className="mx-auto text-white/75 text-sm text-base-100 lg:w-[796px]">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-self-center gap-8">
                {
                  upcomingProduct.map(( product , idx ) => <UpcomingProduct key={idx} product={product}></UpcomingProduct> )
                }
            </div>
        </div>
    );
};

export default Upcoming;