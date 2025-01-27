import { Link, useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { addToStoredCartList ,addToStoredWishList } from "../../Utility/addtoDb";

const ProductDetails = () => {
    const { product_id } = useParams();

    const id = parseInt(product_id)

    const products = useLoaderData();

    const theProduct = products.find((product) => product.product_id === product_id);

    const {product_title, product_image, price, description, Specification, availability, rating } = theProduct

    const handleAddtOCart = (id) => {
        addToStoredCartList(id)
    } ;

    return (
        <div className="bg-purple-600/90 w-full mx-auto pt-12 pb-40 mb-60 relative">
            <div className="text-center">
                <h2 className="text-white text-[40px] font-[700] mb-6">Product Details</h2>
                <p className="mb-8 text-stone-100/70 font-light">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="flex items-center gap-8 absolute bg-base-200 p-8 rounded-3xl left-[14%]">
                <div className="">
                    <img className="w-[360px] rounded-2xl shadow-2xl"
                        src={product_image} alt="product_image" />
                </div>
                <div className="">
                    <h3 className="text-3xl mb-2">{product_title}</h3>
                    <p className="mb-2">{price}</p>
                    <button className="mb-2 border-2 border-emerald-500 bg-emerald-100 p-1 rounded-2xl text-emerald-600 text-xs">
                        {`${availability ? 'In Stock' : 'Out of Stock'}`}
                    </button>
                    <p className="font-light text-[14px]">{description}</p>
                    <p className="text-lg font-black mb-2">Specification</p>
                    <ol className="list-decimal list-inside mb-2">
                        {
                            Specification.map((i, idx) => <li className="text-xs mb-1" key={idx}>{i}</li>)
                        }
                    </ol>
                    <p className="text-lg font-black mb-2">Rating</p>

                    <div className="flex items-center">
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300" />
                        </div>
                        <div className="mt-1">
                            <p className="ml-4 font-bold">{rating}</p>
                        </div>
                    </div>
                    <div className=" flex items-center gap-6">
                        <Link><button className="flex items-center text-white/70 font-bold px-2 bg-purple-500 rounded-3xl"
                        onClick={() => handleAddtOCart(`${id}`)}>Add to Cart
                            <span className="text-white/70 text-2xl"><IoCartOutline></IoCartOutline></span>
                        </button></Link>
                        <Link><button className="p-2 text-2xl bg-stone-200 rounded-[50%]"
                         onClick={() => addToStoredWishList(`${id}`)}
                        ><IoMdHeartEmpty /></button></Link>
                    </div>
                </div>
            </div>
            <div className=" pt-20"> </div>

        </div>
    );
};

export default ProductDetails;