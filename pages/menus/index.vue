<template>
<div class="container mx-auto p-10 sm:p-0">
  <h1 class="my-3 sm:my-10 font-light text-4xl sm:text-5xl text-center">Categories</h1>
    <div class="grid grid-cols-3 sm:grid-cols-4 gap-3 my-5">
        <nuxt-link v-for="cat in categories" :key="cat.idCategory" :to="'menus/' + cat.strCategory">
          <div  class="max-w-sm rounded overflow-hidden shadow-lg">
            <img :src="cat.strCategoryThumb" class="w-full" alt="category-thumbnail">
          <div class="px-6 py-4">
            <div class="font-bold text-sm sm:text-lg mb-2 text-center sm:text-center">{{ cat.strCategory}}</div>
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