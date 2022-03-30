<template>
    <div class="nav flex items-center justify-between sm:justify-around px-4 sm:px-0 border-b border-gray-500 border-dashed">
        <router-link to="/">
        <img src="@/assets/logo_white.png" alt="">
        </router-link>
        <div class="flex space-x-12 hidden sm:flex">
        <router-link class="text-white font-light link" to="/">Home</router-link> 
        <router-link class="text-white font-light link" to="/">About</router-link> 
        <router-link class="text-white font-light link" to="/">Contact</router-link> 
        </div>
        <div @click="showCartMethod" class="h-8 w-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-orange-strong bg-orange hidden sm:flex">
            <img class="h-4 w-4" src="@/assets/cart-shopping-solid.svg" alt="">
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
            }
        }

    }
</script>

<style  scoped>

.nav{
    background: rgba(0, 0, 0, ,.7);
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
.nav img{
    width: 150px !important;
}
</style>