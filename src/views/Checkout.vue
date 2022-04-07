<template>
    <div class="min-h-screen bg-gray-900 p-4">
        <Loading v-if="sendingOrder">Order is being set....</Loading>
        <div class="w-full sm:w-10/12 mx-auto bg-white text-black flex flex-col lg:flex-row  rounded-lg p-4">
            <div class="w-full lg:w-1/2 flex items-center justify-start flex-col" v-if="orderSubmitted">
                        <h1 class="text-2xl my-4">Hurray ! Your order has been submitted, wait for the confirmation e-mail send on <span class="font-bold">{{formData.email}}</span> </h1>
                    <img src="@/assets/thanks.svg" alt="">
            </div>
            <div v-else class="w-full lg:w-1/2 flex items-center justify-start flex-col">
                <h2 class="text-4xl font-bold my-2 text-orange">Order summary</h2>
                <p>Ordered products are shown below, check your list and checkout at any moment.</p>
                <div v-if="cartItems.length>0" class="w-full h-screen overflow-y-scroll">
                    <div v-for="(product,index) in cartItems" :key="index" class="box w-full border borde-black flex items-center justify-start space-x-2 p-2 my-1 text-left relative">
                        <div @click="removeItem(index)"  class="bg-red-400 hover:bg-red-500 cursor-pointer p-2 rounded-md absolute  right-2 bottom-2">
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
                <div class="text-black text-2xl my-2" v-else>
                    <h1>There is nothing in here...</h1>
                    <img src="@/assets/cart.svg" alt="">
                </div>
            </div>
            <div class="w-full lg:w-1/2 flex items-center justify-center flex-col text-left mx-1 card">
                <h2 class="text-4xl font-bold my-2 text-orange">Payment & delivery</h2>
                <p>Complete fields shown below to set your order.</p>
                <form @submit.prevent="setOrder" class="w-11/12 my-2 flex flex-col space-y-2" action="">
                <label for="first-name" class="block ">Name</label>
                <input v-model="formData.name" type="text" placeholder="John Doe" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                <label for="first-name" class="block ">E-mail</label>
                <input v-model="formData.email" type="email" placeholder="JohnDoe@gmai.com" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                <label for="first-name" class="block ">Phone number</label>
                <input  v-model="formData.phone" type="text" placeholder="123 456 789" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                <label for="country" class="block text-sm font-medium text-gray-700">City</label>
                {{ deliveryCity }}
                <select v-model="delivery" id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ">
                  <option  v-for="option in deliveryOptions" :value="option"  :key="option">{{option.name}}(+${{option.price}})</option>
                </select>
                <div class="flex justify-center items-center space-x-4">
                    <div class="w-1/2">
                        <label for="first-name" class="block ">Street</label>
                        <input  v-model="formData.street" type="text" placeholder="Opolska" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
                    <div class="w-1/2">
                        <label for="first-name" class="block ">Number</label>
                        <input  v-model="formData.number" type="text" placeholder="12/4" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
                </div>
            <div>
              <label for="about" class="block text-sm font-medium text-gray-700"> Extra info </label>
              <div class="mt-1">
                <textarea  v-model="formData.extra" id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Please add an extra..."></textarea>
              </div>
            </div>
            <div>
              <label for="about" class="block text-sm font-medium text-gray-700"> Date </label>
              <div class="mt-1">
                <input  v-model="formData.date" class="border border-gray-600" type="date" name="" id="">
              </div>
            </div>
            <div>
              <label for="about" class="block text-sm font-medium text-gray-700"> Time </label>
              <div class="mt-1">
                <input  v-model="formData.time" class="border border-gray-600" type="time" name="" id="">
              </div>
            </div>
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
                <button type="submit" class="inline-block text-center bg-orange text-white font-bold mt-4 border border-transparent rounded-md py-3 px-8  hover:bg-orange-strong" >Checkout</button> 
                </div>
  </form>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store/index.js';
import axios from 'axios';
import Loading from '@/components/Loading.vue';
    export default {
        components:{
Loading,
        },
        data() {
            return {
                sendingOrder:false,
                orderSubmitted:false,
                deliveryOptions:[
                    {name:"North Pine",price:0},
                    {name:"Alamitos Beach",price:0},
                    {name:"Rose Park",price:2},
                    {name:"Belmonts Heights",price:4},
                    {name:"South Wrigley",price:6},
                ],
                delivery:null,
                formData:{
                    name:null,
                    email:null,
                    phone:null,
                    city:this.deliveryCity,
                    street:null,
                    number:null,
                    sumPrice:this.sumPrice,
                     date:null,
                    time:null,
                    deliveryPrice:this.deliveryPrice,
                    extra:null,
                    items:JSON.stringify(this.cartItems),
                }
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
            },
            deliveryPrice(){
                if(this.delivery != null){
                return this.delivery.price;
                }else{
                    return null;
                }
            },
            deliveryCity(){
                if(this.delivery != null){
                return this.delivery.name;
                }else{
                    return null;
                }
            }
        },
        methods: {
        setOrder(){
            this.sendingOrder = true;
            console.log("ok")
            axios.post('http://localhost:8000/api/ordersDelivery',{
                    name:this.formData.name,
                    email:this.formData.email,
                    phone:this.formData.phone,
                    city:this.deliveryCity,
                    street:this.formData.street,
                    number:this.formData.number,
                    sumPrice:this.sumPrice,
                     date:this.formData.date,
                    time:this.formData.time,
                    deliveryPrice:this.deliveryPrice,
                    extra:this.formData.extra,
                    items:JSON.stringify(this.cartItems),
            }).then(res=>{
                console.log(res)
            this.sendingOrder = false;
                localStorage.removeItem('cart');
                localStorage.setItem('cart',JSON.stringify([]));
                store.state.cartItems = [];
                this.orderSubmitted = true;
            }).catch(err=>{
            this.sendingOrder = false;
                console.log(err.data);
            })
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
    }
</script>

<style scoped>

</style>