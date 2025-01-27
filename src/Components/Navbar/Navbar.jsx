import { Link, NavLink, useLocation } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { getStoredCartList, getStoredWishList } from "../../Utility/addtoDb";
import { useEffect, useState } from "react";


const Navbar = () => {
     const {pathname} = useLocation()

    const [countInCart, setCountInCart] = useState(0);
    const [countInWishList, setCountInWishList] = useState(0);

    useEffect(() => {
        const cartList = getStoredCartList() ;
        const wishtList = getStoredWishList() ;
        
        setCountInCart(cartList.length) ;
        setCountInWishList(wishtList.length)
    }, []);
    
    return (
        <nav className={pathname=== '/' ? ' lg:w-11/12 mx-auto lg:mt-2 pt-2 text-white bg-purple-600/90 lg:rounded-t-3xl' : 'lg:w-11/12 mx-auto mt-2 pt-2'}>
            <div className="navbar lg:w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/statistic'>Statistic</NavLink></li>
                            <li><NavLink to='/dashboard'>DashBoard</NavLink></li>
                            <li><NavLink to='/upcoming'>Upcoming</NavLink></li>
                        </ul>
                    </div>
                    <Link to='/'><p className="text-xl font-[700]">Gadget Heaven</p></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="active-btn menu menu-horizontal px-1 gap-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/statistic'>Statistic</NavLink></li>
                        <li><NavLink to='/dashboard'>DashBoard</NavLink></li>
                        <li><NavLink to='/upcoming'>Upcoming</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <div className="flex justify-between">
                        <div className="text-3xl">
                            <Link to='/dashboard'> <p className="flex"><BsCart2 /><span className="text-sm ">{countInCart}</span></p> </Link>
                        </div>
                        <div className=" text-3xl">
                            <Link to='/dashboard/wish-list'><p className="flex "><IoMdHeartEmpty /><span className="text-sm  ">{countInWishList}</span></p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;