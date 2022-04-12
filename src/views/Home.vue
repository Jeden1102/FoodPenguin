<template>
  <div class="home ">
    <div class="baner flex relative pt-20 pb-20 sm:pb-0">
      <div class="baner_left w-full md:w-1/2  lg:w-3/12 h-full flex items-center justify-center flex-col px-4 ">
        <h2 class="text-4xl my-8"> <span class="font-bold underline">Cuisine {{ showCart }} <span class="text-orange">Food</span>Penguin </span> - The fine art of the modern professional cooking methods</h2>
        <p class="font-light">Craving some delicious Greek food? Maybe you’re in the mood for a juicy steak? No matter what kind of meal you have in mind, The Spot Restaurant is ready to prepare it for you.</p>
        <router-link :to="{name:'Menu'}" class="inline-block text-center bg-orange text-white font-bold mt-4 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-orange-strong border-0">Explore menu</router-link>
      </div>
      <a href="#"><img src="@/assets/chevron-down-solid.svg" class="down"  alt=""></a>
    
    </div>
    <div class="why_us border-t-2 border-b-2 border-dashed border-gray-400 h-full py-8 flex items-center justify-center flex-col bg-gray-900">
      <h2 id="features" class="text-3xl font-bold">Features</h2>
      <h3 class="text-2xl">Why Food<span class="text-orange">Penguin</span>  ?</h3>
      <div class="boxes mt-4 flex flex-wrap items-center justify-center ">
        <div class="box m-2 p-8 bg-gray-600 rounded-lg h-96 w-64 flex items-center justify-center space-y-4 flex-col">
          <img class="h-1/2" src="@/assets/why5.svg" alt="">
          <h2 class="font-bold text-xl">Fun&Great Time</h2>
          <p>Spend your free time in our restaurant. Amazing food, people, and music. Such an incredible place.</p>
        </div>
        <div class="box m-2 p-8 bg-gray-600 rounded-lg h-96 w-64 flex items-center justify-center space-y-4 flex-col">
          <img class="h-1/2" src="@/assets/why1.svg" alt="">
          <h2 class="font-bold text-xl">Best food</h2>
          <p>The food taste delicious and you won't regret of spending your time in our local.</p>
        </div>
        <div class="box m-2 p-8 bg-gray-600 rounded-lg h-96 w-64 flex items-center justify-center space-y-4 flex-col">
          <img class="h-1/2" src="@/assets/why3.svg" alt="">
          <h2 class="font-bold text-xl">Fast delivery</h2>
          <p>Don't have time to come to us ? Just order the food and enojoy the meal at home !</p>
        </div>
        <div class="box m-2 p-8 bg-gray-600 rounded-lg h-96 w-64 flex items-center justify-center space-y-4 flex-col">
          <img class="h-1/2" src="@/assets/why6.svg" alt="">
          <h2 class="font-bold text-xl">Best cook</h2>
          <p>In FoodPenguin works only the best cook in our town, come and try their food!</p>
        </div>
      </div>

    </div>
    <div class="menu_snippet h-full">
      <div class="flex flex-col h-full p-12">
        <div class="w-full  h-full ">
          <div class="flex items-center justify-center flex-wrap">
            <router-link   :to="{name:'Menu', params:{target:'Drinks'}}" class="hover:text-white box m-2 p-4 h-56 w-44 flex items-center justify-center bg-gray-700 rounded-md flex-col cursor-pointer hover:bg-gray-800 transition duration-200 hover:border-gray-700 border-gray-500 border-2">
              <h2 class="w-full font-bold text-2xl">Drinks</h2>
              <img src="@/assets/categories_icons/napoje.png" alt="">
            </router-link>
            <router-link :to="{name:'Menu', params:{target:'Pizza'}}"  class="hover:text-white box m-2 p-4 h-56 w-44  flex items-center justify-center bg-gray-700 rounded-md flex-col cursor-pointer hover:bg-gray-800 transition duration-200 hover:border-gray-700 border-gray-500 border-2">
              <h2 class="w-full font-bold text-2xl">Pizza</h2>
              <img src="@/assets/categories_icons/pizza.png" alt="">
            </router-link>
            <router-link :to="{name:'Menu', params:{target:'Taco'}}"  class=" hover:text-white box m-2 p-4 h-56 w-44  flex items-center justify-center bg-gray-700 rounded-md flex-col cursor-pointer hover:bg-gray-800 transition duration-200 hover:border-gray-700 border-gray-500 border-2">
              <h2 class="w-full font-bold text-2xl">Taco</h2>
              <img src="@/assets/categories_icons/taco.png" alt="">
            </router-link>
            <router-link :to="{name:'Menu', params:{target:'Burger'}}"  class="hover:text-white box  m-2 p-4 h-56 w-44  flex items-center justify-center bg-gray-700 rounded-md flex-col cursor-pointer hover:bg-gray-800 transition duration-200 hover:border-gray-700 border-gray-500 border-2">
              <h2 class="w-full font-bold text-2xl">Burgers</h2>
              <img src="@/assets/categories_icons/burgery.png" alt="">
            </router-link>
          </div>
                  <router-link class="inline-block text-center bg-orange text-white font-bold mt-4 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-orange-strong border-0 " :to="{name:'Menu'}">Full Menu</router-link> 
        </div>
      </div>
    </div>
    <div>

    </div>
    <div class="about">
      <!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-gray-900 overflow-hidden  border-t-2 border-b-2 border-dashed border-gray-400">
  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="#0f172a" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <div>
        <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
        </div>

      </div>

      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">What clients say about Food</span>
            <span class="block text-orange xl:inline">Penguin</span>
          </h1>

          <p class="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
          <vueper-slides :arrows="false"  fixed-height="400px"  autoplay bullets-outside>
            <vueper-slide  class="mt-5  sm:mt-8 sm:flex sm:justify-center lg:justify-start flex-col bg-gray-800 p-12 rounded-md" v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content" />
          </vueper-slides>

        </div>
      </main>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="@/assets/happy.jpg" alt="">
  </div>
</div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {

  components: {
    VueperSlides, VueperSlide,
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData(){
      axios.get("https://resturant-api-xx.herokuapp.com/api/getData.php").then(data=>{
        console.log(data);
      })
    }
  },
  data() {
    return{
    slides: [
      {
        title: '<h2 class="font-light mt-4">Mark Twain, 2021-21-3</h2>',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur distinctio doloribus neque laudantium omnis soluta impedit dolores officia minus.
        <div class="w-full  flex justify-center my-2">
          <div class="flex space-x-1">
            <img  class="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="">
            <img  class="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="">
            <img  class="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="">
            <img  class="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="">
            <img  class="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" alt="">
          </div>
        </div>
        `,
      },
      {
        title: '<h2 class="font-light mt-4">John Doe, 2021-22-4</h2>',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur distinctio doloribus neque laudantium omnis soluta impedit dolores officia minus.
        <div class="w-full  flex justify-center my-2">
          <div class="flex space-x-1">
            <img  class="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="">
            <img  class="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="">
            <img  class="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="">
            <img  class="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" alt="">
            <img  class="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" alt="">
          </div>
        </div>
        `,
      },
      {
        title: '<h2 class="font-light mt-4">Radzia Madziej, 2022-21-3</h2>',
        content: `Jedzenie typu tragicznego, jak to się mówi - nie polecam.
        <div class="w-full  flex justify-center my-2">
          <div class="flex space-x-1">
                                    <img  class="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="">
                        <img  class="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" alt="">
                        <img  class="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" alt="">
                        <img  class="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" alt="">
                        <img  class="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" alt="">
          </div>
        </div>
        `,
      },

  ]
    }
  },
}
</script>
<style scoped>
.vueperslides__arrow{
  display:none !important;
}
.vueperslides__arrow--next{
  display:none !important;
}
  .baner{
    background:url('../assets/bg-main3.jpg');
    background-size:cover;
    background-position: center;
    height:100vh;
  }
  .baner_left{
    background-color: rgba(0,0,0,.5)
  }
  .down{
    position: absolute;
    left:50%;
    bottom:15px;
    width:50px;
    cursor: pointer;
    padding:5px;
    transition: .3s;
    border-radius: 5px;
    transform:translate(-50%,0);
  }
  .down:hover{
    background: rgba(255,255,255,.3);
  }
  .menu_snippet{
        background:url('../assets/main.jpg');
    background-size:cover;
    background-position: bottom;
  }
  .home{
    transform: translateY(30px);
  }
</style>