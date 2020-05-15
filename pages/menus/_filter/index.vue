<template>
    <div class="container mx-auto w-full p-10 sm:p-0">
  <h1 class="m-5 p-3 font-light text-4xl sm:text-5xl text-center">{{ this.newTitle }} Recipes</h1>
  <div class="grid grid-cols-4 gap-10">
  <filterComponent/>
    <div class="grid grid-cols-3 col-span-3 sm:grid-cols-4 gap-3 my-5">
        <div v-for="recipe in recipes" :key="recipe.idMeal" class="max-w-sm rounded overflow-hidden shadow-lg" style="height:350px;">
        <nuxt-link :to="'/menus/'+ $route.params.filter +'/'+recipe.idMeal">
            <img :src="recipe.strMealThumb" class="w-full" alt="recipe-thumbnail">
        </nuxt-link>
          <div class="px-6 py-4 flex justify-between">
            <div class="font-medium text-sm sm:text-lg mb-2 mr-3">{{ recipe.strMeal}}</div>
            <favorite @click.native="addFav(recipe.idMeal,recipe.strMealThumb,recipe.strMeal,recipe.strCategory)"/>
          </div>
        </div>
      </div>
      </div>
</div>
</template>
<script>
const STORAGE_KEY = "fav-storage"

import axios from "axios"
import filterComponent from "../../../components/filter"
import favorite from "../../../components/wishbutton"

export default {
  components: {
    filterComponent,
    favorite
  },
    data() {
    return {
      recipes: [],
      favs: [],
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
    },
    addFav(favId,favPict,favName,favCategory) {
      this.favs.push({id: favId, picture: favPict, name: favName, category: favCategory})
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.favs))
      this.$toast.success("Added to favorites !", {
          theme: "bubble",
          position: "top-center",
          duration: "1500"
        })
  },
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