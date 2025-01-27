import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar.JSX";
import Footer from "../Components/Footer/Footer";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Toaster />
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-330px)] mb-12">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;