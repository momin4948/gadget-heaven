import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const ListedProducts = ({product}) => {
    const {pathname} = useLocation() ;

    const {product_title , description , product_image , price} = product ;
    return (
        <div className="flex items-center gap-6 bg-stone-200 p-4 rounded-2xl m-3 md:m-6">
            <div>
                <img  className="w-[150px] h-[124px] rounded-2xl"
                src={product_image} alt="" />
            </div>
            <div className="space-y-3">
                <h5 className="text-lg font[700]">{product_title}</h5>
                <p className="text-sm">{description}</p>
                <p>Price : {price}</p>
                <button className={pathname === '/dashboard/wish-list'?'bg-purple-500 px-2 py-1 rounded-2xl text-base-100': 'hidden'}>Add to Cart</button>
            </div>
        </div>
    );
};


ListedProducts.propTypes = {
    product : PropTypes.object
}
export default ListedProducts;