<template>
  <Nav class="nav"/>
  <MobileNav class="mobile-nav sm:hidden"/>
  <Cart class="cart"/>
  <Alert v-if="showAlert"  class="fixed left-10 bottom-10 w-1/2 h-32 bg-green-600 z-50 flex justify-center items-center">Product added to cart <img class="h-8 w-8" src="@/assets/cart-shopping-solid.svg" alt=""></Alert>
  <router-view v-on:show-alert="showAlert = !showAlert"/>
  <Footer/>
</template>
<script>
import Nav from '@/components/Nav.vue';
import Cart from '@/components/Cart.vue';
import MobileNav from '@/components/MobileNav.vue';
import Footer from '@/components/Footer.vue';
import Alert from '@/components/Alert.vue';
export default {
  components:{
    Nav,
    Cart,
    MobileNav,
    Footer,
    Alert
  },
  data() {
    return {
        showAlert:false,
    }
  },
}
</script>
<style>
#app {
  font-family: 'Raleway', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(212, 212, 212);
}
.nav{
  position:fixed;
  left:0;
  top:0;
  width:100%;
}
.mobile-nav{
  position:fixed;
  left:0;
  top:0;
  width:100%;
  height:100vh;
}

</style>
