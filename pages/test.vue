<template>
    <div>
        <div v-for="te in test" :key="te.strMeal">
            <h1>{{ te.strMeal}}</h1>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {    
    return {
      ft: ".png",
      src: "/",
      test: []
    }
  },
  async created() {
    var i = 65
    var j = 91
    var t

    for(t = i; t < j; t++){
    var letter = String.fromCharCode(t)
    if(letter === "C") {break}
    const cat = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f="+letter)
    console.log(cat.data.meals)
    this.test = cat.data.meals
    }
    
  }
}
</script>