<template>
<div class="container mx-auto p-10 sm:p-0 h-screen">
  <h1 class="my-3 sm:my-10 font-light text-4xl sm:text-5xl text-center">Favorite Recipes</h1>
    <div class="grid grid-cols-4 gap-10">
    <div v-if="this.favorites !== null" class="grid grid-cols-3 col-span-3 sm:grid-cols-4 gap-3 my-5">
          <div v-for="fav in favorites" :key="fav.id" class="max-w-sm rounded overflow-hidden shadow-lg">
             <nuxt-link :to="'menus/'+fav.category+'/'+fav.id">
            <img :src="fav.picture" class="w-full" alt="category-thumbnail">
             </nuxt-link>
          <div class="px-6 py-4 flex justify-between">
            <div class="font-medium text-sm sm:text-lg mb-2 text-center sm:text-center">{{ fav.name}}</div>
            <favorite />
            </div>
        </div>
      </div>
      <div v-else class="col-span-4 text-center">
        <h1 class="text-4xl font-light my-5 text-gray-500">No favorites</h1>
      </div>
    </div>
</div>
</template>

<script>
const STORAGE_KEY = "fav-storage";
export default {
    data() {
        return{
            favorites: []
        }
    },
    async created() {
        this.favorites = JSON.parse(localStorage.getItem(STORAGE_KEY))
    }
    
}
</script>