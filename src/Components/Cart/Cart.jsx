import { PiSortAscendingBold } from "react-icons/pi";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredCartList } from "../../Utility/addtoDb";
import ListedProducts from "../Listedproducts/ListedProducts";
import { sortProducts } from "../../Utility/carsts";


const Cart = () => {
    const products = useLoaderData();
    const [listedProducts, setListedProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const StoredCartList = getStoredCartList();
        const cartsProductlist = products.filter(product => StoredCartList.includes(product.product_id));
        setListedProduct(cartsProductlist);
    }, [products]);

    useEffect(() => {
        const total = parseFloat(listedProducts.reduce((preVal, product) => preVal + product.price, 0)).toFixed(2)
        setTotalPrice(total);
    }, [listedProducts]);


    const handleSort = () => {
        const toSortProducts = [...listedProducts];
        sortProducts(toSortProducts, setListedProduct);

    }

    const handlePurchase = () => {
        if (listedProducts.length > 0) {
            document.getElementById('success').showModal();
        }
        else {
            document.getElementById('rejected').showModal();
        }

        setListedProduct([]);
        localStorage.removeItem('cart-list');
    }

    return (
        <div>
            <div className="lg:my-8 mx-auto w-11/12 flex justify-between">
                <div className="">
                    <h4 className="font-[700] text-2xl">Cart</h4>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-6">
                    <h4 className="font-[700] text-xl">Total Cost : {totalPrice}</h4>
                    <button onClick={() => handleSort()}
                        className="flex items-center gap-2 font-[600] text-lg border-2 border-purple-600 text-purple-600 rounded-2xl py-1 px-2"
                    >Sort By Price<PiSortAscendingBold /></button>
                    <button
                        onClick={() => handlePurchase()}
                        className="font-[600] text-lg border bg-purple-500 text-white/80 rounded-2xl py-1 px-2">Purchase</button>
                </div>
            </div>
            <div className="lg:my-8 mx-auto w-11/12">
                {
                    listedProducts.map((product, idx) => <ListedProducts key={idx} product={product}></ListedProducts>)
                }
            </div>
            <dialog id="success" className="modal">
                <div className="modal-box flex flex-col gap-4 justify-center items-center">
                    <img src='/Group.png' alt="" />
                    <h3 className="font-bold text-lg">Payment Successfully</h3>
                    <p className="py-4">Thanks for purchasing.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/'><button className="border-2 bg-purple-300 rounded-2xl py-2 px-8 w-full">Close</button></Link>
                        </form>
                    </div>
                </div>
            </dialog>
            <dialog id="rejected" className="modal">
                <div className="modal-box flex flex-col gap-4 justify-center items-center">
                    <h3 className="font-bold text-lg">Nothing to buy</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <Link to='/'><button className="border-2 bg-purple-300 rounded-2xl py-2 px-8 w-full">Close</button></Link>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Cart;