<template>
    <div class="min-h-screen bg-gray-900 p-4">
        <div class="w-full sm:w-10/12 mx-auto bg-white text-black flex flex-col lg:flex-row  rounded-lg p-4">
            <div class="w-full lg:w-1/2 flex items-center justify-center flex-col">
                <h2 class="text-4xl font-bold my-2 text-orange">Order summary</h2>
                <p>Ordered products are shown below, check your list and checkout at any moment.</p>
                <div v-for="(product,index) in cartItems" :key="index" class="box w-full border borde-black flex items-center justify-start space-x-2 p-2 my-1 text-left relative">
                    <div class="bg-red-400 hover:bg-red-500 cursor-pointer p-2 rounded-md absolute  right-2 bottom-2">
                    <img src="@/assets/trash.svg" class="h-7 w-7" alt="">
                    </div>
                    <img class="w-32 sm:w-40" src="@/assets/burger.png" alt="">
                    <div>
                        <h2 class="text-xl font-bold">{{ product.name }}</h2>
                        <p>{{ product.desc }}</p>
                        <p class="font-bold">${{product.price}}</p>
                    </div>
                    <div class="absolute right-2 top-2 sm:block">
                        <span class="badge bg-primary">{{ product.size }}</span>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/2 flex items-center justify-center flex-col text-left mx-1 card">
                <h2 class="text-4xl font-bold my-2 text-orange">Payment & delivery</h2>
                <p>Complete fields shown below to set your order.</p>
                <form class="w-11/12 my-2 flex flex-col space-y-2" action="">
                <label for="first-name" class="block ">Name</label>
                <input type="text" placeholder="John Doe" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                <label for="first-name" class="block ">E-mail</label>
                <input type="email" placeholder="JohnDoe@gmai.com" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                <label for="first-name" class="block ">Phone number</label>
                <input type="text" placeholder="123 456 789" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                <label for="country" class="block text-sm font-medium text-gray-700">City</label>
                <select v-model="deliveryPrice" id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ">
                  <option  v-for="option in deliveryOptions" :value="option.price"  :key="option">{{option.name}}(+${{option.price}})</option>
                </select>
                <div class="flex justify-center items-center space-x-4">
                    <div class="w-1/2">
                        <label for="first-name" class="block ">Street</label>
                        <input type="text" placeholder="Opolska" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
                    <div class="w-1/2">
                        <label for="first-name" class="block ">Number</label>
                        <input type="text" placeholder="12/4" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
                </div>

                </form>
                <hr/>
                <div class="card w-full p-2 flex items-center justify-center flex-col">
                    <h2 class="text-4xl font-bold my-2 text-orange">Summary</h2>
                    <div class="w-full text-xl">
                        <div class="flex w-full ">
                            <div class="w-1/2 text-center ">
                                Subtotal
                            </div>
                            <div class="w-1/2 text-center ">
                                ${{ cartItemsPrice }}
                            </div>
                        </div>
                        <div class="flex w-full border-b border-gray-500">
                            <div class="w-1/2 text-center ">
                                Delivery
                            </div>
                            <div v-if="deliveryPrice != null" class="w-1/2 text-center ">
                                ${{ deliveryPrice }}
                            </div>
                            <div class="w-1/2 text-center text-red-400" v-else>
                                Set the city first
                            </div>
                        </div>
                        <div class="flex w-full font-bold text-2xl">
                            <div class="w-1/2 text-center">
                                Total
                            </div>
                            <div class="w-1/2 text-center ">
                                ${{ sumPrice }}
                            </div>
                        </div>
                    </div>
                <button class="inline-block text-center bg-orange text-white font-bold mt-4 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-orange-strong" >Checkout</button> 
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store/index.js';
    export default {
        data() {
            return {
                deliveryOptions:[
                    {name:"North Pine",price:0},
                    {name:"Alamitos Beach",price:0},
                    {name:"Rose Park",price:2},
                    {name:"Belmonts Heights",price:4},
                    {name:"South Wrigley",price:6},
                ],
                deliveryPrice:null,
            }
        },
        computed:{
            cartItems(){
                return store.state.cartItems
            },
            cartItemsPrice(){
                if(this.cartItems.length>0){
                return store.state.cartItems.map(o => o.price).reduce((a, c) => { return +a + +c });
                }else{
                    return 0;
                }
            },
            sumPrice(){
                return this.cartItemsPrice + this.deliveryPrice;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>