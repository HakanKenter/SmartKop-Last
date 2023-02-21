import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { 
    productReducers, 
    productDetailsReducer,
    newReviewReducer,
    newProductReducer,
    productReducer,
    productReviewsReducer,
    reviewReducer
} from './reducers/productReducers';
import {
    authReducer,
    userReducer,
    forgotPasswordReducer,
    allUsersReducer, 
    userDetailsReducer
} from './reducers/userReducers';
import {
    cartReducer
} from './reducers/cartReducers';
import { 
    newOrderReducer, 
    myOrdersReducer, 
    orderDetailsReducer, 
    allOrdersReducer, 
    orderReducer
} from './reducers/orderReducers';

const reducer = combineReducers({
    products: productReducers,
    productDetails: productDetailsReducer,
    newProduct: newProductReducer,
    product: productReducer,
    productReviews: productReviewsReducer,
    review: reviewReducer,
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    allOrders: allOrdersReducer,
    orderDetails: orderDetailsReducer,
    order: orderReducer,
    newReview: newReviewReducer
})

// After save cartItem in local storage, i initialize state with getting local storage item 
// to have access to my cartItem
let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    }
}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;