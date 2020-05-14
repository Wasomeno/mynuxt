<template>
<transition appear @enter="navAnimation" :css="false">
<div class="bg-white h-0" id="nav">
    <ul class="h-16 flex items-center justify-around sm:justify-around">
        <li class="font-lighter text-xs sm:text-base">
            <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="font-lighter text-xs sm:text-base">
            <nuxt-link to="/menus">Menus</nuxt-link>
        </li>
         <li class="font-lighter text-xs sm:text-base">
            <nuxt-link to="/favorites">Favorites</nuxt-link>
        </li>
        <li class="font-lighter text-xs sm:text-base">
            <nuxt-link to="/about">About</nuxt-link>
        </li>
        
        <li>
            <form @submit.prevent="onSubmit" class="flex relative " >
            <input v-model="text" class="bg-white border-b border-gray-500 py-1 sm:py-2 px-4 block w-full" 
            type="recipe" placeholder="Search Recipes..." id="search-form">
            <button type="submit" class="absolute" style="top: 30%;right:5%;opacity:75%"><img src="/loupe.png" class="w-4 sm:w-4" alt="search-icon"></button>
            </form>
        </li>
        
        <li v-if="this.$fireAuth.currentUser != null" class="font-lighter text-xs sm:text-base">
            {{ this.$fireAuth.currentUser.email }}
            <button @click="logOut()">Logout</button>
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
        navAnimation() {
            const tl =  gsap.timeline()
            tl.to("#nav",{duration: 1.2, height:"4rem", ease: "expo.inOut"})
            .to("li",{duration: 1, opacity: "100%", bottom: "0%", ease: "expo.inOut", stagger: 0.15})
        },
        logOut() {
            this.$fireAuth.signOut()
            this.$router.push("/")
        }
    }
}
</script>
<style scoped>
.nuxt-link-exact-active {
  font-weight: 600;
  border-bottom: 1px solid gray;
}
li {
    position: relative;
    opacity: 0%;
    bottom: -25%;
}
</style>