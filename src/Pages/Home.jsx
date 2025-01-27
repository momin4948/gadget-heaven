import { Outlet} from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Categories from "../Components/Categories/Categories";



const Home = () => {
    
    
    return (
        <div>
            <Banner></Banner>
            <div className="w-11/12 mx-auto mt-20 md:mt-96">
                <h2 className="text-4xl font-[700] text-center mb-8">Explore Cutting-Edge Gadgets</h2>
                <div className="flex flex-col md:flex-row lg:gap-8">
                    <div className="md:w-3/12"><Categories></Categories></div>
                    <div className="w-full"><Outlet></Outlet></div>
                </div>
            </div>
        </div>
    );
};

export default Home;