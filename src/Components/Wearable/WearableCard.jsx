import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const WearableCard = ({ wearable }) => {
    const { product_id, product_title, product_image, price } = wearable;

    return (
        <div>
            <div className="card bg-base-100 w-[320px] h-[468px] shadow-xl">
                <figure>
                    <img className="w-[220px] lg:w-[300px] h-[220px] lg:h-[300px]"
                        src={product_image}
                        alt="Shoes" />
                </figure>
                <div className="card-body w-[300px]">
                    <h2 className="card-title">{product_title}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-start">
                        <Link to={`products/${product_id}`}>
                            <button className="py-1 px-2 border-2 border-purple-500 rounded-2xl font-[700] hover:bg-purple-500 hover:text-white">
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

WearableCard.propTypes = {
    wearable: PropTypes.object
}

export default WearableCard;