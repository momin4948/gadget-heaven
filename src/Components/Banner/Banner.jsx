import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="bg-purple-600/90 lg:w-11/12 mx-auto pt-12 pb-40 rounded-b-3xl relative">
            <div className="text-center m-4">
                <h1 className=
                    "text-white mx-auto lg:w-8/12 text-3xl lg:text-5xl font-[700] mb-4">
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="text-sm md:text-base mx-auto lg:w-6/12 mb-8 text-stone-100">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <Link to='/dashboard'> <button className="bg-white p-2 rounded-3xl text-purple-500 font-[700]">Shop Now</button> </Link>
            </div>
            <div className=" mx-auto w-11/12 lg:w-8/12 bg-white/50 backdrop-blur-2xl rounded-2xl md:absolute md:left-[16%] md:top-[75%] z-50 p-3 lg:p-6">
                <img className="object-fill w-full lg:h-[420px] rounded-2xl" src="/banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;