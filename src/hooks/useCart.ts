import { ProductsType } from '@/interFace/interFace';
import { cart_product, clear_cart, decrease_quantity } from '@/redux/slices/cartSlice';
import { clear_wishlist, wishlist_product } from '@/redux/slices/wishlist-slice';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const useCart = () => {
    const dispatch = useDispatch();

    // Add product on cart
    const UseAddToCart = (product: ProductsType) => {
        dispatch(cart_product(product));
    };
    // Add product on wishlist 
    const UseAddToWishlist = (product: ProductsType) => {
        dispatch(wishlist_product(product));
    };
    //  Remove single product form  cart 
    const UseRemoveDecreaseCart = (product: ProductsType) => {
        dispatch(decrease_quantity(product));
    };

    // Remove all cart products
    const UseClearCart = () => {
        dispatch(clear_cart());
    };

    //  Remove all wishlist products
    const UseClearWishlist = () => {
        dispatch(clear_wishlist());
    };

    // Cart quantity
    const UseCartProductQuantity = () => {
        const cartProducts = useSelector(
            (state: RootState) => state.cart.cartProducts
        );
        const uniqueProductId = new Set();
        cartProducts.forEach((product: any) => uniqueProductId.add(product.id));
        return uniqueProductId.size;
    };
    // Wishlist quantity
    const UseWishlstQuantity = () => {
        const cartProducts = useSelector(
            (state: RootState) => state?.wist.cartProducts
        );
        const uniqueProductId = new Set();
        cartProducts?.forEach((product: any) => uniqueProductId.add(product.id));

        return uniqueProductId.size;
    }

    return {
        UseAddToCart,
        UseAddToWishlist,
        UseCartProductQuantity,
        UseWishlstQuantity,
        UseClearCart,
        UseClearWishlist,
        UseRemoveDecreaseCart
    }
};

export default useCart;