<template>
<div class="container mx-auto w-full">
    <ul class="h-16 flex items-center justify-around sm:justify-between">
        <li class="font-medium text-xs sm:text-base">
            <transition enter-class @mouseover="over" :css="false">
        <nuxt-link to="/">Home</nuxt-link>
        </transition>
        </li>
        
        <li class="font-medium text-xs sm:text-base">
            <nuxt-link to="/menus">Menus</nuxt-link>
        </li>
        <li class="font-medium text-xs sm:text-base">
            <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
            <form @submit.prevent="onSubmit" class="flex relative" >
            <input v-model="text" class="bg-white border-2 border-black rounded-lg py-1 sm:py-2 px-4 block w-full" 
            type="recipe" placeholder="Search Recipes..." id="search-form">
            <label for="search-form">|</label>
            <button type="submit" class="absolute" style="top: 30%;right:5%"><img src="/loupe.png" class="w-4 sm:w-5" alt="search-icon"></button>
            </form>
        </li>
    </ul>
    </div>    
</template>

<script>
import gsap from 'gsap'
export default {
    name: "Navbar",
    data(){
        return{
            text:""
        }
    },
    methods: {
        onSubmit() {
            window.location.href = "/search/"+this.text;
            this.text = ""
        },
        over(a){
            gsap.to(a, 0.5, {color:"red"})
        },
        out(a){
            gsap.to(a, 0.5, {color:"black"})
        }
    }
}
</script>