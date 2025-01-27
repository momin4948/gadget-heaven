import { Link, Outlet, } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Dashboard = () => {
    const {pathname} = useLocation() ; 
    return (
        <div>
            <div className="bg-purple-500 lg:w-11/12 mx-auto space-y-4 text-center p-8">
                <h3 className="text-white text-3xl font-[700]">Dashboard</h3>
                <p className="text-sm md:text-base mx-auto text-white/75 text-base-100 lg:w-[796px]">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="mx-auto w-2/12">
                    <div role="tablist" className="tabs tabs-boxed">
                        <Link to='/dashboard'role="tab" className={pathname === '/dashboard' ?'tab bg-purple-500/90 text-white' : 'tab'}>Cart</Link>
                        <Link to='/dashboard/wish-list' role="tab" 
                        className={pathname === '/dashboard/wish-list' ?'tab bg-purple-500/90 text-white' : 'tab'}>Wishlist</Link>
                    </div>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;