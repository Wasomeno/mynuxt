<template>
<transition appear @enter="navAnimation" :css="false">
<div class="bg-transparent">
    <ul class="h-16 flex items-center justify-around sm:justify-around">
        <li class="font-lighter text-xs sm:text-base">
            <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="font-lighter text-xs sm:text-base">
            <nuxt-link to="/menus">Menus</nuxt-link>
        </li>
        <li class="font-lighter text-xs sm:text-base">
            <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
            <form @submit.prevent="onSubmit" class="flex relative " >
            <input v-model="text" class="bg-white border border-black rounded-full py-1 sm:py-2 px-4 block w-full" 
            type="recipe" placeholder="Search Recipes..." id="search-form">
            <button type="submit" class="absolute" style="top: 30%;right:10%"><img src="/loupe.png" class="w-4 sm:w-5" alt="search-icon"></button>
            </form>
        </li>
        
        <li v-if="this.$fireAuth.currentUser != null" class="font-lighter text-xs sm:text-base">
            {{ this.$fireAuth.currentUser.email}}
            <button>Logout</button>
        </li>
        <li v-else>
            <nuxt-link :to="'/login'">Login</nuxt-link>            
            <nuxt-link :to="'/register'">Register</nuxt-link>
        </li>
    </ul>
    </div>    
</transition>
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
        navAnimation(a) {
            const tl =  gsap.timeline()
            tl.fromTo(a,  {opacity: "0%"}, {duration: 1.5,opacity: "100%", ease: "expo.inOut" })
    }
    }
}
</script>
<style scoped>
.nuxt-link-exact-active {
  font-weight: 600;
  border-bottom: 1px solid gray;
}
</style>