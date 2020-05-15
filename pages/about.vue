<template>
<div class="container mx-auto h-auto min-w-full">
  <h1 class="font-light text-5xl my-10 text-center">About Us</h1>
<div class="grid grid-rows-2 my-10">
  <div id="sect-one" class="grid grid-cols-12 grid-rows-2">
  <div class="col-span-4 row-span-2" id="pict1">
  </div>
  <div class="col-span-4 col-start-5 row-start-2 flex justify-center items-center" id="title">
    <p class="font-lighter text-center text-xl">"Lorem ipsum dolor sit amet, consectetur
       adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna
         aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat"</p>
  </div>
  <div class="col-start-9 col-end-12 row-start-2" id="pict2">
  </div>
  </div>

  <div id="sect-two" class="grid grid-cols-12 grid-rows-2">
  <div class="col-span-5 row-span-2" id="pict1">
  </div>
  <div class="col-span-2" id="title">
  </div>
  <div class="col-span-5 row-span-2" id="pict2">
  </div>
  </div>

</div>
</div>    
</template>
<script>
export default {
      head() {
    return {
      title: "About Us",
      meta: [
      {
        hid: "description",
        name: "description",
        content: "Best Restaurant"
      }
    ]
}
},
methods: {
  
}
}
</script>
<style scoped>
#sect-one #pict1{
  background-image: url('/pict1.jpg');
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
}

#sect-two #pict2{
  background-image: url('/pict2.jpg');
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>