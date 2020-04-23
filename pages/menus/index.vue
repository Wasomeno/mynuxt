<template>
<div class="container mx-auto w-full">
  <h1 class="m-5 p-3 font-light text-5xl text-center">Categories</h1>
    <div class="grid grid-cols-4 gap-3 my-5">
        <nuxt-link v-for="cat in categories" :key="cat.idCategory" :to="'menus/' + cat.strCategory">
          <div  class="max-w-sm rounded overflow-hidden shadow-lg">
            <img :src="cat.strCategoryThumb" class="w-full">
          <div class="px-6 py-4">
            <div class="font-bold text-lg mb-2">{{ cat.strCategory}}</div>
            <!-- <div class="text-gray-700 text-base flex justify-between items-center">
              {{ menu.strCategory}} | {{ menu.strArea}}<img :src="src + menu.strArea + ft" class="w-8 h-8">
            </div> -->
          </div>
          <div class="px-6 py-4">
            <!-- <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{{ menu.strTags}}</span> -->
          </div>
        </div>
        </nuxt-link>
      </div>
</div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      ft: ".png",
      src: "/",
      categories: []
    }
  },
  async created() {
    const cat = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    this.categories = cat.data.categories
  },
  
  head() {
    return {
      title: "Our Recipes",
      meta: [
      {
        hid: "description",
        name: "description",
        content: "Best Restaurant"
      }
    ]
    }
  }
}
</script>