 
 
 const sortProducts = (toSortProducts , setListedProduct) => {

        const sortedProducts = toSortProducts.sort((a, b) => b.price - a.price);

        return setListedProduct(sortedProducts);
 }





export {sortProducts,}