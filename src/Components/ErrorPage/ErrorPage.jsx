import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <img src='/public/istockphoto-1415203156-612x612.jpg' alt="" />
            <h1 className="text-5xl ">Page Not Found</h1>
            <Link to='/'>
                <button className="px-4 py-2 rounded-2xl bg-purple-500 text-white/80 hover:bg-purple-700">
                    Retrun to Home Page
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;