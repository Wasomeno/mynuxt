<template>
    <div class="container mx-auto w-full p-10 sm:p-0">
  <h1 class="m-5 p-3 font-light text-4xl sm:text-5xl text-center">{{ this.newTitle }} Recipes</h1>
  <div class="grid grid-cols-4 gap-10">
  <filterComponent/>
    <div class="grid grid-cols-3 col-span-3 sm:grid-cols-4 gap-3 my-5">
        <nuxt-link v-for="recipe in recipes" :key="recipe.idMeal" :to="'/menus/'+ $route.params.filter +'/'+recipe.idMeal">
          <div  class="max-w-sm rounded overflow-hidden shadow-lg">
            <img :src="recipe.strMealThumb" class="w-full" alt="recipe-thumbnail">
          <div class="px-6 py-4">
            <div class="font-bold text-sm sm:text-lg mb-2">{{ recipe.strMeal}}</div>
          </div>
        </div>
        </nuxt-link>
      </div>
      </div>
</div>
</template>
<script>
import axios from "axios"
import filterComponent from "../../../components/filter"

export default {
  components: {
    filterComponent
  },
    data() {
    return {
      recipes: [],
      title: this.$route.params.filter,
      newTitle: ""
    }
  },
  async created() {
    this.removeChar(this.title)
    const res = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?"+this.$route.params.filter)
    this.recipes = res.data.meals
    console.log(this.recipes) 
  },
  methods: {
    removeChar(a) {
      if(a.includes("a=")){
      this.newTitle = a.replace("a=","")
      }else if(a.includes("c=")){
      this.newTitle = a.replace("c=","")  
      }else {
      this.newTitle = a.replace("i=","")    
      }
    }
  }
  ,
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