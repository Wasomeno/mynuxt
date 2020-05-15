<template>
<div class="max-w-xs h-screen rounded overflow-hidden shadow-lg mb-10">
          <div class="px-6 py-2 bg-gray-300">
            <h2 class="my-2">Filter</h2>
          </div>
          <div class="px-6">
            <h2 class="my-2">By Category</h2>
            <div class="flex flex-col font-thin text-sm sm:text-base mb-2 mt-2">
            <nuxt-link :to="'/menus/c=Vegetarian'" class="mt-1">Vegetarian</nuxt-link>
            <nuxt-link :to="'/menus/c=Vegan'" class="mt-1">Vegan</nuxt-link>
            <nuxt-link :to="'/menus/c=Breakfast'" class="mt-1">Breakfast</nuxt-link>
            <nuxt-link :to="'/menus/c=Seafood'" class="mt-1">Seafood</nuxt-link>
            <nuxt-link :to="'/menus/c=Side'" class="mt-1 mb-2">Side Dishes</nuxt-link>
            </div>
            <hr class="border-gray-400">
          </div>
          <div class="px-6">
            <h2 class="my-2">By Country</h2>
            <div class="flex flex-col font-thin text-sm sm:text-base mb-2 mt-2">
            <nuxt-link :to="'/menus/a=American'" class="mt-1">America</nuxt-link>
            <nuxt-link :to="'/menus/a=Canadian'" class="mt-1">Canada</nuxt-link>
            <nuxt-link :to="'/menus/a=Turkish'" class="mt-1">Turkey</nuxt-link>
            <nuxt-link :to="'/menus/a=Chinese'" class="mt-1">China</nuxt-link>
            <nuxt-link :to="'/menus/a=Japanese'" class="mt-1">Japan</nuxt-link>
            <nuxt-link :to="'/menus/a=Italian'" class="mt-1">Italy</nuxt-link>
            <nuxt-link :to="'/menus/a=Italian'" class="mt-1 mb-2">France</nuxt-link>
            <hr class="border-gray-400">
            </div>
          </div>
          <div class="px-6">
            <h2 class="my-2">By Ingridients</h2>
            <div class="flex flex-col font-thin text-sm sm:text-base mb-2 mt-2">
            <nuxt-link :to="'/menus/i=Chicken'" class="mt-1">Chicken</nuxt-link>
            <nuxt-link :to="'/menus/i=Salmon'" class="mt-1">Salmon</nuxt-link>
            <nuxt-link :to="'/menus/i=Pork'" class="mt-1">Pork</nuxt-link>
            <nuxt-link :to="'/menus/i=Bacon'" class="mt-1 mb-2">Bacon</nuxt-link>
            <hr class="border-gray-400">
            </div>
          </div>
</div>
</template>
<script>
export default {
    name: "Filter",
    data() {
      return{
      isActive: false
      }
    },
    methods: {
      clickFilter: function() {
        this.isActive = !this.isActive
      }
    }
}
</script>
<style scoped>
.nuxt-link-active {
  font-weight: 500;
}
</style>