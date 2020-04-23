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
        <li cl><input class="bg-white border-2 border-black rounded-lg py-2 px-4 block w-64" type="recipe" placeholder="Search Recipe">
        </li>
    </ul>
    </div>    
</template>

<script>
export default {
    name: "Navbar"
}
</script>