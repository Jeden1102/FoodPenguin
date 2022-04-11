<template>
    <div class="nav flex items-center justify-between sm:justify-around px-4 sm:px-0 border-b border-gray-600 bg-gray-900 ">
        <router-link to="/">
        <img class="h-16 sm:h-20" src="@/assets/logo_white.png" alt="">
        </router-link>
        <div class="flex space-x-12 hidden sm:flex">
        <router-link class="text-white font-light link" to="/">Home</router-link> 
        <router-link class="text-white font-light link" :to="{name:'Menu'}">Menu</router-link> 
        <router-link class="text-white font-light link" :to="{name:'Contact'}">Contact</router-link> 
        </div>
        <div @click="showCartMethod" class="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-orange-strong bg-orange relative  flex">
            <img class="h-4 w-4" src="@/assets/cart-shopping-solid.svg" alt="">
            <div class="absolute w-6 h-6 bg-white text-black rounded-full font-bold top-6 border-orange-strong border flex items-center justify-center right-7">
                {{ cartItemsCount }}
            </div>
        </div>
        <div @click="showMobileNavMethod" class="h-8 w-8 flex items-center justify-center rounded-full cursor-pointer  flex sm:hidden">
            <img src="@/assets/bars.png" alt="">
        </div>
    </div>
</template>

<script>
import store from '@/store/index.js';
    export default {
        methods: {
         showCartMethod(){
             store.dispatch("getCartItems");
             console.log("OK");
            store.state.showCart = true;
        },
        showMobileNavMethod(){
            store.state.showMobileNav = true;
        }
        },
        computed:{
            test(){
                return store.state.showMobileNav;
            },
            cartItemsCount(){
                return store.state.cartItems.length;
            }
        }

    }
</script>

<style  scoped>

.nav{
    z-index:10;
}
.link{
    position: relative;
    transition:.3s;
}
.link:hover:after{
    width:100%;
}
.link::after{
    width:0;
    height:1px;
    background-color: white;
    position: absolute;
    left:0;
    bottom:0;
    content:'';
    transition:.3s;
}

</style>