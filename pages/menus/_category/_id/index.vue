<template>
<div class="container mx-auto w-full mt-5">
    <div v-for="detail in details" :key="detail" class="meal">
    <h1 class="font-light text-5xl text-center my-5">{{ detail.strMeal }}</h1>
    <div class="grid grid-cols-3 grid-rows-2 my-5">
        <div class="meal-pict bg-red-300 col-span-1">
            <img :src="detail.strMealThumb" class="w-full">
        </div>
        <div class="meal-ingr bg-blue-300 col-span-2 flex flex-col justify-center">
            <h1 class="my-5 text-center font-medium text-xl">Ingredients</h1>
            <ul class="grid grid-cols-2">
            <div class="left mx-auto">
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
                <h1>
                    {{detail.strIngredient4}} 
                    ( {{detail.strMeasure4}} )
                </h1>
            </li>
            <li>
                <h1>
                    {{detail.strIngredient5}} 
                    ( {{detail.strMeasure5}} )
                </h1>
            </li>
            <li>
                <h1>
                    {{detail.strIngredient6}} 
                    ( {{detail.strMeasure6}} )
                </h1>
            </li>
            <li>
                <h1>
                    {{detail.strIngredient7}} 
                    ( {{detail.strMeasure7}} )
                </h1>
            </li>
            <li>
                <h1>
                    {{detail.strIngredient8}} 
                    ( {{detail.strMeasure8}} )
                </h1>
            </li>
            <li>
                <h1>
                    {{detail.strIngredient9}} 
                    ( {{detail.strMeasure9}} )
                </h1>
            </li>
            <li>
                <h1>
                    {{detail.strIngredient10}} 
                    ( {{detail.strMeasure10}} )
                </h1>
            </li>
            </div>
            <div class="right mx-auto">
            <li>
                <h1>
                    {{detail.strIngredient11}} 
                    ( {{detail.strMeasure11}} )
                </h1>
            </li>
            <li>
                <h1>
                    {{detail.strIngredient12}} 
                    ( {{detail.strMeasure12}} )
                </h1>
            </li>
            <li>
                <h1>
                    {{detail.strIngredient13}} 
                    ( {{detail.strMeasure13}} )
                </h1>
            </li>
            <li>
                <h1>
                    {{detail.strIngredient14}} 
                    ( {{detail.strMeasure14}} )
                </h1>
            </li>
            <li>
                <h1>
                    {{detail.strIngredient15}} 
                    ( {{detail.strMeasure15}} )
                </h1>
            </li>
            <li>
                <h1>
                    {{detail.strIngredient16}} 
                    ( {{detail.strMeasure16}} )
                </h1>
            </li>
            <li>
                <h1>
                    {{detail.strIngredient17}} 
                    ( {{detail.strMeasure17}} )
                </h1>
            </li>
            <li>
                <h1>
                    {{detail.strIngredient18}} 
                    ( {{detail.strMeasure18}} )
                </h1>
            </li>
            <li>
                <h1>
                    {{detail.strIngredient19}} 
                    ( {{detail.strMeasure19}} )
                </h1>
            </li>
            <li>
                <h1>
                    {{detail.strIngredient20}} 
                    ( {{detail.strMeasure20}} )
                </h1>
            </li>
            </div>
            </ul>
        </div>
        <div class="meal-inst bg-purple-300 col-span-3">
            <h1 class="text-xl font-medium text-center my-5">Instructions</h1>
            <p class="mx-10">{{ detail.strInstructions}}</p>
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