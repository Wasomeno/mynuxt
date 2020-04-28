<template>
<div class="container mx-auto w-full">
    <ul class="h-16 flex items-center justify-between">
        <li class="font-medium">
            <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="font-medium">
            <nuxt-link to="/menus">Menus</nuxt-link>
        </li>
        <li class="font-medium">
            <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
            <form @submit.prevent="onSubmit" class="flex relative">
            <input v-model="text" class="bg-white border-2 border-black rounded-lg py-2 px-4 block w-full" 
            type="recipe" placeholder="Search Recipes...">
            <button type="submit" class="absolute" style="top: 30%;right:5%"><img src="/loupe.png" class="w-5"></button>
            </form>
        </li>
    </ul>
    </div>    
</template>

<script>
export default {
    name: "Navbar",
    data(){
        return{
            text:""
        }
    },
    methods: {
        onSubmit() {
            this.$emit("search-text", this.text)
            window.location.href = "/search/"+this.text;
            this.text = ""
        }
    }
}
</script>