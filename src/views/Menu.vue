<template>
  <div class="min-h-screen py-4 bg-gray-900 ">
    <h1 class="text-white">{{params}}</h1>
  <Alert v-if="showAlert">Product has been added</Alert>

<ul class="nav nav-tabs flex items-center justify-center space-x-2 border-0 mb-4" id="myTab" role="tablist">
  <li v-for="(category,index) in categories" :key="index" class="nav-item " role="presentation">
    <button class="nav-link text-white w-full h-full"  :id="`x${category.name}`" data-bs-toggle="tab" :data-bs-target="`#${category.name}`" type="button" role="tab" aria-controls="home" aria-selected="true">{{ category.name }}</button>
  </li>
</ul>
<div  class="tab-content" id="myTabContent">
  <div v-for="(category,index) in categories" :key="index" class="tab-pane fade show " :id="category.name" role="tabpanel" aria-labelledby="home-tab">
    {{category.name}}
    <div class="flex justify-center items-center  flex-wrap">
      <div class="box  w-60 rounded-lg p-4 m-2  flex items-center justify-center flex-col space-y-3 bg-white" v-for="(product,index) in products[category.id]" :key="index">
        <img class="h-28" :src="`${imgLink}/${product.image_url}`" alt="">
        <h1 class="font-bold ">{{product.name}}</h1>
        <span class="badge bg-primary">{{product.size}}</span>
        <p class="">{{product.desc}}</p>        
        <div class="flex items-center justify-center space-x-4">
          <h1  class="font-bold text-xl">
            ${{ product.price }}
          </h1>
        <button @click="addToCart(product)" class="text-3xl text-center bg-orange text-white font-bold  border border-transparent rounded-md py-2 px-6 hover:bg-orange-strong">+</button>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '@/store/index.js';
import Alert from '@/components/Alert.vue';
  export default {
    components:{
      Alert,
    },
    data() {
      return {
        categories:null,
        products:[],
        imgLink : "https://foodpenguinimages.s3.amazonaws.com/uploads",
        addons:["beef","cheese","chicken","paprika","tomato"],
        showAlert:false,
        params:null,
      }
    },
    mounted() {
      this.getData();
      setTimeout(()=>{
      this.changeTab();
      },1000)
    },
    methods: {
      changeTab(){
this.params = this.$route.params.target;
if(this.params){
  let btn = document.querySelector(`#x${this.params}`);
  btn.click();
}
      },
      firstLink(){
        setTimeout(()=>{
        let links = document.querySelectorAll('.nav-link');
        links[0].click();
        },100)
      },
      getData(){
        axios.get("http://localhost:8000/api/categories").then(res=>{
          this.categories = res.data;
          this.firstLink();
        })
        axios.get("http://localhost:8000/api/productsGrupped").then(res=>{
          this.products = res.data;
          console.log(res.data);
        })
      },
      addToCart(product){
        this.showAlert = true;
        setTimeout(()=>{
          this.showAlert=false;
        },7000)
        if(localStorage.getItem('cart')){
          let oldItems = JSON.parse(localStorage.getItem('cart'));
          oldItems.push(product);
          localStorage.removeItem('cart');
          localStorage.setItem('cart',JSON.stringify(oldItems));
          console.log(oldItems);
          store.dispatch("getCartItems");
        }else{
          let arr =[];
          arr.push(product);
          localStorage.setItem('cart',JSON.stringify(arr));
          console.log(JSON.parse(localStorage.getItem('cart')));
        }
      }
    },
  }
</script>

<style scoped>
.active{
  color:black !important;
}
</style>