<template>
    <div>
        <!-- This example requires Tailwind CSS v2.0+ -->
<Transition name="fade">
        <div v-if="showCart" class="fixed inset-0  transition-all ease-in-out duration-500  overflow-hidden" v-bind:class="{'z-50': showCart }" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
        <div class="absolute inset-0 overflow-hidden transition-all ease-in-out duration-500  ease-in-out duration-500" v-bind:class="[showCart ? 'opacity-100' : 'opacity-0']">
            <!--
            Background overlay, show/hide based on slide-over state.

            Entering: "ease-in-out duration-500"
                From: "opacity-0"
                To: "opacity-100"
            Leaving: "ease-in-out duration-500"
                From: "opacity-100"
                To: "opacity-0"
            -->
            <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-all ease-in-out duration-500" aria-hidden="true"></div>
            <div v-if="showCart" class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 transform transition-all ease-in-out duration-500   sm:duration-700 inner " >
            <!--
                Slide-over panel, show/hide based on slide-over state.
v-bind:class="[showCart ? 'translate-x-0' : 'translate-x-full']" 
                Entering: ""
                From: "translate-x-full"
                To: "translate-x-0"
                Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                From: "translate-x-0"
                To: ""
            -->
            <div class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div class="flex items-start justify-between p-4">
                        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                        <div class="ml-3 flex h-7 items-center">
                            <button @click="hideCart" type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                            <span class="sr-only">Close panel</span>
                            <!-- Heroicon name: outline/x -->
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </button>
                        </div>
                    </div>
                <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">


                    <div class="mt-8">
                    <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200" v-if="cartItems.length>0">
                        <li v-for="(product,index) in cartItems" :key="product.id" class="flex py-6">
                            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img :src="`${imgLink}/${product.image_url}`"  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center">
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                            <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                    <a href="#"> {{ product.name }} </a>
                                </h3>
                                <p class="ml-4">${{product.price}}</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">{{ product.size }}</p>
                            </div>
                            <div class="flex flex-1 items-end justify-between text-sm">
                                <p class="text-gray-500">Qty 1</p>

                                <div class="flex">
                                <button @click="removeItem(index)" type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                </div>
                            </div>
                            </div>
                        </li>

                        <!-- More products... -->
                        </ul>
                        <div class="text-black text-2xl my-2" v-else>
                            <h1>There is nothing in here...</h1>
                            <img src="@/assets/cart.svg" alt="">
                        </div>
                    </div>
                    </div>
                </div>

                <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${{cartItemsPrice.toFixed(2)}}</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div class="mt-6">
                    <router-link @click="hideCart" class="inline-block text-center bg-orange text-white font-bold mt-4 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-orange-strong" to="Checkout">Checkout</router-link> 
                    </div>
                    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                        or <button @click="hideCart" type="button" class="font-medium text-orange hover:text-orange-strong">Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
</Transition>

    </div>
</template>

<script>
import store from '@/store/index.js';

    export default {
        data() {
            return {
                imgLink : "https://foodpenguinimages.s3.amazonaws.com/uploads",
            }
        },
        beforeMount(){
        },
        methods: {
            hideCart(){
                store.state.showCart = false;
                store.state.showMobileNav  = false;
            },
            removeItem(id){
                console.log(id);
                let items = JSON.parse(localStorage.getItem('cart'));
                items.splice(items,1);
                localStorage.removeItem('cart');
                localStorage.setItem('cart',JSON.stringify(items));
                store.state.cartItems = items;
            }

        },
        computed:{
            showCart(){
                return store.state.showCart
            },
            cartItems(){
                return store.state.cartItems
            },
            cartItemsPrice(){
                if(this.cartItems.length>0){
                return store.state.cartItems.map(o => o.price).reduce((a, c) => { return +a + +c });
                }else{
                    return 0;
                }
            }
        }
    }
</script>

<style  scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.fade-enter-active .inner,
.fade-leave-active .inner{
  transition: all 0.3s ease;
  transform: translateX(0%);
}

.fade-enter-from .inner,
.fade-leave-to .inner{
  transform: translateX(100%);

}
</style>