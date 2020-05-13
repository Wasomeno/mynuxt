<template>
    <div class="w-full h-screen flex flex-col justify-center items-center">
    <h1 class="text-5xl font-thin py-3 my-3">Register Page</h1>
  <form class="bg-white shadow-md w-1/4 rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input v-model="userInfo.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input v-model="userInfo.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
    </div>
    <div class="flex items-center justify-center">
      <button @click="submitForm(userInfo)" class="bg-gray-500 hover:bg-gray-700 text-white font-lighter py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign Up
      </button>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>    
</template>
<script>
import validations from "validation-utils"
export default {
  
    name:"registerPage",
    data() {
        return{
            userInfo: {
                email: "",
                password: ""
            },
            ...validations
        }
    },
    props: ["submitForm"]
}
</script>