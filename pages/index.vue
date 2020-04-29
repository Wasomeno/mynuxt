<template>
  <div class="container min-w-full w-full flex flex-col">
    <div class="top flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat" id="top">
    <!-- <transition appear @enter="contentAnimation" :css="false"> -->
      <h1 class="font-thin text-5xl sm:text-6xl relative z-10" id="title">
        <span>.</span>
        <span>Q</span>
        <span>U</span>
        <span>A</span>
      </h1>
    <!-- </transition> -->
    </div>
    <div class="mid h-screen grid grid-cols-2">
      <div class="left-side flex flex-col items-baseline justify-center">
        <div class="content mx-12">
        <h1 class="font-medium text-3xl sm:text-4xl mb-3">RECIPES</h1>
        <p class="font-normal text-sm sm:text-lg text-justify sm:text-justify">
        A progression of rare and beautiful
        ingredients where texture, flavour 
        and harmony is paramount. Delve into 
        the Quay dining experience with 
        Peter Gilmore’s Ten Course Menu 
        and thoughtfully curated Wine List 
        by Fink Wine Director Amanda Yallop, 
        and Quay Head Sommelier, Shanteh Wong.
        </p>
        <button class="bg-white w-24 sm:w-32 h-10 border-solid border-2 border-black mt-5">MENU</button>
      </div>
      </div>
      <div class="right-side flex items-center justify-center">
        <img src="/foods.jpg" class="w-11/12" alt="foods">
      </div>
    </div>
    <div class="bottom h-auto bg-gray-100 p-10">
      <div class="container mx-auto">
      <h1 class="text-4xl sm:text-5xl mb-10 font-thin text-center">Our Top Recipes</h1>
      <div class="products grid grid-cols-3 gap-4">
          <nuxt-link v-for="prod in prods" :key="prod.idMeal" :to="'/menus/'+ prod.strCategory +'/'+prod.idMeal">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img :src="prod.strMealThumb" class="w-full" alt="top-recipes">
          <div class="px-6 py-4">
            <div class="font-bold text-sm sm:text-lg mb-2">{{ prod.strMeal}}</div>
            <div class="text-gray-700 text-sm sm:text-base flex justify-between items-center">
              {{ prod.strCategory}}
            </div>
          </div>
        </div>
        </nuxt-link>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import axios from 'axios'
export default {
  data(){
    return{
      prods: []
    }
  },
  async created() {
    const rec = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=e")
    this.prods = rec.data.meals 
  },
  head() {
    return {
      title: "Welcome To .QUA",
      meta: [
      {
        hid: "description",
        name: "description",
        content: "Best Restaurant"
      }
    ]
}
},
methods: {
    contentAnimation(a) {
      const tl =  gsap.timeline()
      tl.fromTo(a,  {x: -50, opacity: "0%"}, {duration: 1.5, x: 0, opacity: "100%", ease: "expo.inOut" })
    }
}
}
</script>

<style>
/* .transition {
      display: flex;
      position: absolute;
      z-index: 10;
      height: 100vh;
      width: 100%;
      top: 0;
      left: 0;
      margin: 0;
      pointer-events: none;
  }
  .transition li {
      transform: scaleY(0);
      background: #2d3748;
      width: 20%;
  } */
</style>