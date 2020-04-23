<template>
  <div class="container min-w-full flex flex-col">
    <div class="top flex items-center justify-center h-screen bg-gray-300">
      <h1 class="font-thin text-6xl">
        <span>.</span>
        <span>Q</span>
        <span>U</span>
        <span>A</span>
      </h1>
    </div>
    <div class="mid h-screen grid grid-cols-2">
      <div class="left-side bg-red-300 flex flex-col items-baseline justify-center">
        <div class="content mx-12">
        <h1 class="font-medium text-4xl mb-3">MENU</h1>
        <p class="font-normal text-lg text-justify">
        A progression of rare and beautiful 
        ingredients where texture, flavour 
        and harmony is paramount. Delve into 
        the Quay dining experience with 
        Peter Gilmore’s Ten Course Menu 
        and thoughtfully curated Wine List 
        by Fink Wine Director Amanda Yallop, 
        and Quay Head Sommelier, Shanteh Wong.
        </p>
        <button class="bg-white w-32 h-10 border-solid border-2 border-black mt-5">MENU</button>
      </div>
      </div>
      <div class="right-side">

      </div>
    </div>
    <div class="bottom h-screen bg-blue-400">
      <div class="gallery grid">

      </div>
    </div>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: "Welcome To .QUA",
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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
