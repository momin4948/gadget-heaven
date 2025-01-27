import PropTypes from "prop-types";

const UpcomingProduct = ({ product }) => {
    const {  product_title, product_image, price, Specification } = product;
    return (
        <div className="card bg-base-100 w-[320px] shadow-xl">
            <figure>
                <img className="w-[220px] lg:w-[300px] h-[220px] lg:h-[300px] rounded-2xl"
                    src={product_image}
                    alt="Shoes" />
            </figure>
            <div className="card-body w-[300px]">
                <h2 className="card-title">{product_title}</h2>
                <p>{price}</p>
                <p></p>
                <ol className="text-xs list-disc">
                    {
                        Specification.map((point ,idx) => <li key={idx} >{point}</li>)
                    }
                </ol>
                <div className="card-actions justify-start">
                    <button className="py-1 px-2 border-2 border-purple-500 rounded-2xl font-[700] w-full bg-purple-500 text-white">
                        Upcoming
                    </button>
                </div>
            </div>
        </div>
    );
};

UpcomingProduct.propTypes = {
    product: PropTypes.object
}

export default UpcomingProduct;