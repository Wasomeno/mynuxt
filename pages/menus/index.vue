<template>
<div class="container mx-auto p-10 sm:p-0">
  <h1 class="my-3 sm:my-10 font-light text-4xl sm:text-5xl text-center">Recipes</h1>
    <div class="grid grid-cols-4 gap-10">
    <filterComponent/>
    <div class="grid grid-cols-3 col-span-3 sm:grid-cols-4 gap-3 my-5">
          <div v-for="cat in categories" :key="cat.idCategory"   class="max-w-sm rounded overflow-hidden shadow-lg">
             <nuxt-link :to="'menus/'+cat.strCategory+'/'+cat.idMeal">
            <img :src="cat.strMealThumb" class="w-full" alt="category-thumbnail">
        </nuxt-link>
          <div class="px-6 py-4 flex justify-between">
            <div class="font-bold text-sm sm:text-lg mb-2 text-center sm:text-center">{{ cat.strMeal}}</div>
            <favorite/>
            </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import axios from "axios"
import filterComponent from "../../components/filter"
import favorite from "../../components/wishbutton"

export default {
  components: {
    filterComponent,
    favorite
  },
  data() {
    return {
      ft: ".png",
      src: "/",
      categories: []
    }
  },
  async created() {
    const cat = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=u")
    this.categories = cat.data.meals
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