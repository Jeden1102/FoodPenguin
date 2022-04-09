<template>
    <div class="h-full bg-gray-900 pt-4 pb-4">
        <Loading v-if="sendingForm">Your form is being send</Loading>
        <div class="w-full md:w-11/12 flex flex-col items-center justify-center mx-auto border border-white rounded-md">
            <div class="w-full top-img h-full lg:h-52 rounded-md">
                <div class="content h-full flex items-center justify-center rounded-md">
                    <div class="flex items-center flex-col lg:flex-row  justify-center lg:space-x-8 space-y-8 p-4">
                        <div class="">
                            <h2 class="font-bold">Get in touch</h2>
                            <p>We'd love to here from you. If you have any questions feel free to ask!</p>
                                <div class="flex space-x-4 mt-2 items-center justify-center">
                                    <a href="#">
                                        <img class="h-6 w-6" src="@/assets/footer_icons/fb.svg" alt="">
                                    </a>
                                    <a href="#">
                                        <img class="h-6 w-6" src="@/assets/footer_icons/tw.svg" alt="">
                                    </a>
                                    <a href="#">
                                        <img class="h-6 w-6" src="@/assets/footer_icons/yt.svg" alt="">
                                    </a>
                                </div>
                        </div>
                        <div class="flex items-center justify-center flex-col   h-full lg:h-60">
                            <h2 class="font-bold flex"> <img src="@/assets/envelope-solid.svg" class="h-6 w-6 mx-2" alt=""> Chat to us</h2>
                            <p>Our friendly team is here to help.</p>
                            <a href="mailto:bum123@o2.pl" class="text-orange font-bold">foodpenguin@contact.com</a>
                        </div>
                        <div class="flex items-center justify-center flex-col   h-full lg:h-60">
                            <h2 class="font-bold flex"> <img src="@/assets/location-dot-solid.svg" class="h-6 w-6 mx-2" alt="">Restaurant</h2>
                            <p>Come say hello to our restaurant.</p>
                            <p class="font-bold  text-orange">330 Pine Ave, Long Beach, CA 90802, USA</p>
                        </div>
                        <div class="flex items-center justify-center flex-col   h-full lg:h-60">
                            <h2 class="font-bold flex"> <img src="@/assets/footer_icons/phone-solid.svg" class="h-6 w-6 mx-2" alt="">Phone</h2>
                            <p>Our friendly team is here to help.</p>
                            <a  href="tel:+48774616612" class="text-orange font-bold">(+48) 77 461 66 12</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white w-full text-black p-8 flex flex-col md:flex-row">
                <div class="flex items-center justify-center flex-col w-full md:w-1/2 p-4">
                    <h2 class="font-bold text-4xl">Level up our communication</h2>
                    <img class="h-52 my-8" src="@/assets/contact_svgs/mail.svg" alt="">
                    <p class="text-xl">You can reach us anytime via 
                    <a href="mailto:bum123@o2.pl" class="text-orange font-bold">foodpenguin@contact.com</a>
                    </p>
                </div>
                <div class="w-full md:w-1/2 flex items-center justify-center flex-col space-y-2">
                <form @submit.prevent="sendForm" action="">
                    <label for="first-name" class="block text-gray-900 text-left w-full">Name</label>
                    <input v-model="name" type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="John Doe">
                    <label for="first-name" class="block text-gray-900 text-left w-full">Email</label>
                    <input v-model="email" type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="JohnDoe@gmail.com">
                    <label for="first-name" class="block text-gray-900 text-left w-full">Phone number</label>
                    <input v-model="phone" type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="512 123 989">
                    <label for="about" class="block text-left w-full text-gray-900"> Message </label>
                    <div class="mt-1 w-full">
                        <textarea v-model="content" id="about" name="about"  class="shadow-sm h-28  focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="I'd like to ask about organising..."></textarea>
                    </div>
                            <button type="submit" class="inline-block text-center bg-orange text-white font-bold mt-4 border border-transparent rounded-md py-3 px-8 hover:bg-orange-strong">Send</button>
                </form>
                <div v-if="errors.length>0" class="alert alert-danger mt-2 p-6" role="alert">
                    <h2>There were some erors while sending form :</h2>
                    <ul class="list-disc">
                        <li v-for="error in errors" :key="error">{{error}}</li>
                    </ul>
                </div>
                <div v-if="formSubmitted" class="alert alert-success mt-2 p-6" role="alert">
                    <h2>Form has been submitted succefully!</h2>
                </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Loading from '@/components/Loading.vue';
    export default {
        components:{
            Loading,
        },
        data() {
            return {
                name:null,
                email:null,
                phone:null,
                content:null,
                sendingForm:false,
                formSubmitted:false,
                errors:[],
            }
        },
        methods: {
            sendForm(){
                this.errors = [];
                if(this.name == null){
                    this.errors.push("Name field cannot be blank");
                }
                if(this.email == null){
                    this.errors.push("Email field cannot be blank");
                }
                if(this.phone == null){
                    this.errors.push("Phone field cannot be blank");
                }
                if(this.content == null){
                    this.errors.push("Content field cannot be blank");
                }
                if(this.errors.length>0){
                    return;
                }
                this.sendingForm = true;
            axios.post('https://resturant-api-xx.herokuapp.com/api/contact',{
                name:this.name,
                email:this.email,
                phone:this.phone,
                content:this.content,
            }).then(res=>{
                console.log(res)
                this.sendingForm = false;
                this.formSubmitted = true;
            }).catch(err=>{
                console.log(err.data);
                this.sendingForm = false;
                this.formSubmitted = true;
            })
            }
        },
    }
</script>

<style  scoped>
.top-img{
    background: url("../assets/bg-main1.jpg");
    background-size: cover;
    background-position: center;
}
.content{
    background-color: rgba(0,0,0,.6)
}
</style>