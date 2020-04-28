<template>
  <div>
    <Navbar v-on:search-text="searchText"/>
      <nuxt />
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import axios from "axios"
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>