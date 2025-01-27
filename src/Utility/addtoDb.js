import toast from 'react-hot-toast';

const getStoredCartList = () => {

    const storedCartListStr = localStorage.getItem('cart-list') ;

    if(storedCartListStr){
       const storedCartList = JSON.parse(storedCartListStr) ;

       return storedCartList ;
    }

    else {
        return [] ;
    }

} ; 

const addToStoredCartList = (id) => {
    const storedCartList = getStoredCartList() ;
    if(storedCartList.includes(id)){
        toast.error('Already Exist in the Cart');
    }
    else{
        storedCartList.push(id) ;
        const storedCartListStr = JSON.stringify(storedCartList) ; 
        localStorage.setItem('cart-list' , storedCartListStr ) ;
        toast.success('Successfully Added in the Cart');
    } ;
};


const getStoredWishList = () => {
      const storedWishListStr = localStorage.getItem('wish-list') ;
      if(storedWishListStr) {
         const storedWishList = JSON.parse(storedWishListStr) ;
         return storedWishList ;
      }
      else {
        return [] ;
      }
} ;


const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList() ;
    if (storedWishList.includes(id)) {
        toast.error('Already Exist in Wishlist');
       
    }

    else {
        storedWishList.push(id) ; 
        const storedWishListStr = JSON.stringify(storedWishList) ;
        localStorage.setItem('wish-list' , storedWishListStr);
        toast.success('Successfully Added in your wishlist')
    }
} 





export { addToStoredCartList , addToStoredWishList , getStoredCartList , getStoredWishList } ;