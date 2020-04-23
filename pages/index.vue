<template>
  <div class="container min-w-full flex flex-col">
    <div class="top flex items-center justify-center h-screen bg-gray-300" id="top">
    <transition appear @enter="contentAnimation" :css="false">
      <h1 class="font-thin text-6xl" id="title">
        <span>.</span>
        <span>Q</span>
        <span>U</span>
        <span>A</span>
      </h1>
    </transition>
    </div>
    <div class="mid h-screen grid grid-cols-2">
      <div class="left-side bg-red-300 flex flex-col items-baseline justify-center">
        <div class="content mx-12">
        <h1 class="font-medium text-4xl mb-3">RECIPES</h1>
        <p class="font-normal text-lg text-justify">
        A progression of rare and beautiful 
        ingredients where texture, flavour 
        and harmony is paramount. Delve into 
        the Quay dining experience with 
        Peter Gilmore’s Ten Course Menu 
        and thoughtfully curated Wine List 
        by Fink Wine Director Amanda Yallop, 
        and Quay Head Sommelier, Shanteh Wong.
        </p>
        <button class="bg-white w-32 h-10 border-solid border-2 border-black mt-5">MENU</button>
      </div>
      </div>
      <div class="right-side">

      </div>
    </div>
    <div class="bottom h-screen bg-blue-400">
      <div class="gallery grid">

      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
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