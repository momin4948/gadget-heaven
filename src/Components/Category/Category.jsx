import PropTypes from "prop-types";
import {NavLink } from "react-router-dom";

const Category = ({category}) => {
   const {product_category} = category
    return (
        <div className="">
            <NavLink to={`/${product_category}`}><button className="p-2 bg-stone-300 rounded-lg hover:bg-purple-500 hover:text-white w-full"
            >{product_category}</button></NavLink>
        </div>
    );
};

Category.propTypes = {
    category : PropTypes.object
}

export default Category;