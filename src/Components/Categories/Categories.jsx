import { useEffect, useState } from "react";
import Category from "../Category/Category";
import {NavLink } from "react-router-dom";

const Categories = () => {
    const [categories , setCategories] = useState([]) ;
     
    useEffect(() => {
        fetch('/Categories.json')
        .then (res => res.json())
        .then (data => setCategories(data))
    } , []) ;
    
    return (
        <div className="grid grid-cols-2 lg:grid-cols-1 justify-self-center gap-4 ">
            <div className="">
            <NavLink to='/'><button className="p-2 bg-stone-300 rounded-lg hover:bg-purple-500 hover:text-white w-full"
            >All Products</button></NavLink>
        </div>
           {
            categories.map((category ,idx) => <Category key={idx} category={category}></Category> )
           }
        </div>
    );
};

export default Categories;
