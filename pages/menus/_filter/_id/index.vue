<template>
<div class="container mx-auto w-full mt-5"> 
    <div v-for="detail in details" :key="detail" class="meal">
    <h1 class="font-light text-4xl sm:text-5xl text-center my-5">{{ detail.strMeal }}</h1>
    <div class="grid grid-cols-2 sm:grid-cols-3 grid-rows-1 sm:grid-rows-2 my-5">
        <div class="meal-pict col-span-1">
            <img :src="detail.strMealThumb" class="w-full h-full" alt="meal-thumbnail">
        </div>
        <div class="meal-ingr bg-gray-300 col-span-2 flex flex-col justify-center">
            <h1 class="my-3 sm:my-5 text-center font-medium text-base sm:text-xl">Ingredients</h1>
            <ul class="grid grid-cols-2">
            <div class="left ml-3 my-3 sm:mx-auto text-xs sm:text-base">
            <li>
                <h1>
                     {{detail.strIngredient1}} 
                    ( {{detail.strMeasure1}} )
                </h1>
            </li>
            <li>
                <h1>
                     {{detail.strIngredient2}} 
                    ( {{detail.strMeasure2}} )
                </h1>
            </li>
            <li>
                <h1>
                     {{detail.strIngredient3}} 
                    ( {{detail.strMeasure3}} )
                </h1>
            </li>
            <li>
                <h1 v-if="detail.strIngredient4 == ''">
                </h1>

                <h1 v-else>
                     {{detail.strIngredient4}} 
                    ( {{detail.strMeasure4}} )
                </h1>
            </li>
            <li>
                <h1 v-if="detail.strIngredient5 == ''">
                </h1>
                <h1 v-else>
                    {{detail.strIngredient5}} 
                    ( {{detail.strMeasure5}} )
                </h1>
            </li>
            <li>
                <h1 v-if="detail.strIngredient6 == ''">
                </h1>
                
                <h1 v-else>
                    {{detail.strIngredient6}} 
                    ( {{detail.strMeasure6}} )
                </h1>
            </li>
            <li>
                <h1 v-if="detail.strIngredient7 == ''">
                </h1>
                <h1 v-else>
                    {{detail.strIngredient7}} 
                    ( {{detail.strMeasure7}} )
                </h1>
            </li>
            <li>
                <h1 v-if="detail.strIngredient8 == ''">
                </h1>
                
                <h1 v-else>
                    {{detail.strIngredient8}} 
                    ( {{detail.strMeasure8}} )
                </h1>
            </li>
            <li>
                <h1 v-if="detail.strIngredient9 == ''">
                </h1>
                <h1 v-else>
                    {{detail.strIngredient9}} 
                    ( {{detail.strMeasure9}} )
                </h1>
            </li>
            <li>
                <h1 v-if="detail.strIngredient10 == ''">
                </h1>
                <h1 v-else>
                    {{detail.strIngredient10}} 
                    ( {{detail.strMeasure10}} )
                </h1>
            </li>
            </div>
            <div class="right ml-3 my-3 sm:mx-auto text-xs sm:text-base">
            <li>
                <h1 v-if="detail.strIngredient11 == ''"> 
                </h1>

                <h1 v-else>
                    {{detail.strIngredient11}} 
                    ( {{detail.strMeasure11}} )
                </h1>
            </li>
            <li>
                <h1 v-if="detail.strIngredient12 == ''">
                </h1>
                <h1 v-else>
                    {{detail.strIngredient12}} 
                    ( {{detail.strMeasure12}} )
                </h1>
            </li>
            <li>
                <h1 v-if="detail.strIngredient13 == ''">
                </h1>
                <h1 v-else>
                    {{detail.strIngredient13}} 
                    ( {{detail.strMeasure13}} )
                </h1>
            </li>
            <li>
                <h1 v-if="detail.strIngredient14 == ''">
                </h1>
                <h1 v-else>
                    {{detail.strIngredient14}} 
                    ( {{detail.strMeasure14}} )
                </h1>
            </li>
            <li>
                <h1 v-if="detail.strIngredient15 == ''">
                </h1>
                <h1 v-else>
                    {{detail.strIngredient15}} 
                    ( {{detail.strMeasure15}} )
                </h1>
            </li>
            <li>
                <h1 v-if="detail.strIngredient16 == ''">
                </h1>

                <h1 v-else>
                    {{detail.strIngredient16}} 
                    ( {{detail.strMeasure16}} )
                </h1>
            </li>
            <li>
                <h1 v-if="detail.strIngredient17 == ''">
                </h1>
                <h1 v-else>
                    {{detail.strIngredient17}} 
                    ( {{detail.strMeasure17}} )
                </h1>
            </li>
            <li>
                <h1 v-if="detail.strIngredient18 == ''">
                </h1>
                <h1 v-else>
                    {{detail.strIngredient18}} 
                    ( {{detail.strMeasure18}} )
                </h1>
            </li>
            <li>
                <h1 v-if="detail.strIngredient19 == ''">
                </h1>
                <h1 v-else>
                    {{detail.strIngredient19}} 
                    ( {{detail.strMeasure19}} )
                </h1>
            </li>
            <li>
                <h1 v-if="detail.strIngredient20 == ''">
                </h1>
                
                <h1 v-else>
                    {{detail.strIngredient20}} 
                    ( {{detail.strMeasure20}} )
                </h1>
            </li>
            </div>
            </ul>
        </div>
        <div class="meal-inst bg-gray-500 col-span-3">
            <h1 class="text-base sm:text-xl font-medium text-center my-3 sm:my-5">Instructions</h1>
            <p class="mx-10 text-xs sm:text-base">{{ detail.strInstructions}}</p>
        </div>
    </div>
    </div>
</div>
</template>
<script>
import axios from "axios"

export default {
    data() {
    return {
    i : 0,
    details: {}
    }
  },
  async created() {
    const res = await axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+this.$route.params.id)
    this.details = res.data.meals
    console.log(this.details) 
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