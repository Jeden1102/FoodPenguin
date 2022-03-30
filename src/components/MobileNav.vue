<template>
<Transition name="fade">
      <div v-if="showMobileNav" class="bg-gray-900 z-50 text-black absolute flex flex-col items-center justify-center">
        <img @click="hideMobileNav" class="h-12 w-12 cursor-pointer absolute right-8 top-8 " src="@/assets/close.png" alt="">
        <router-link class="absolute left-8 top-4 w-40" to="/">
        <img src="@/assets/logo_white.png" alt="">
        </router-link>
        <div class="flex space-y-8 flex-col">
        <router-link class="text-white font-light text-3xl link" to="/">Home</router-link> 
        <router-link class="text-white font-light text-3xl link" to="/">About</router-link> 
        <router-link class="text-white font-light text-3xl link" to="/">Contact</router-link> 
        </div>
        <div @click="showCartMethod" class="h-12 w-12 mt-4 flex items-center justify-center rounded-full cursor-pointer hover:bg-orange-strong bg-orange  sm:flex">
            <img class="h-4 w-4" src="@/assets/cart-shopping-solid.svg" alt="">
        </div>
    </div>
</Transition>

</template>

<script>
import store from '@/store/index.js';

    export default {
        computed:{
            showMobileNav(){
                return store.state.showMobileNav
            }
        },
        methods: {
            hideMobileNav(){
                store.state.showMobileNav  = false;
            },
                     showCartMethod(){
             console.log("OK");
            store.state.showCart = true;
        },
        },
    }
</script>

<style  scoped>
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
.fade-enter-active,
.fade-leave-active{
  transition: all 0.3s ease;
  transform: translateY(0%);
}

.fade-enter-from ,
.fade-leave-to{
  transform: translateY(-100%);

}
</style>