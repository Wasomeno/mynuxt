<template>
    <div class="container mx-auto w-full p-10 sm:p-0">
  <h1 class="m-5 p-3 font-light text-4xl sm:text-5xl text-center">{{ this.$route.params.category }} Recipes</h1>
    <div class="grid grid-cols-3 sm:grid-cols-4 gap-3 my-5">
        <nuxt-link v-for="recipe in recipes" :key="recipe.idMeal" :to="'/menus/'+ $route.params.category +'/'+recipe.idMeal">
          <div  class="max-w-sm rounded overflow-hidden shadow-lg">
            <img :src="recipe.strMealThumb" class="w-full" alt="recipe-thumbnail">
          <div class="px-6 py-4">
            <div class="font-bold text-sm sm:text-lg mb-2">{{ recipe.strMeal}}</div>
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
      recipes: []
    }
  },
  async created() {
    const res = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c="+this.$route.params.category)
    this.recipes = res.data.meals
    console.log(this.recipes) 
  },
  
  head() {
    return {
      title: "Recipe",
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