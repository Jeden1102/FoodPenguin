import {createStore} from 'vuex'

export default createStore({
    state:{
        showCart:false,
        showMobileNav:false,
        cartItems:[],
    },
    getters:{},
    mutations: {
    GET_CART_ITEMS(state, payload) {
        state.cartItems = payload;
        console.log(state.cartItems);
    },
    },
    actions:{
        getCartItems({commit}){
            const cartItems = JSON.parse(localStorage.getItem("cart"));
            commit("GET_CART_ITEMS",cartItems);
        }
    }
  })