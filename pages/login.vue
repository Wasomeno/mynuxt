<template>
 <login :submitForm="userLogin"/>
</template>

<script>
import login from "../components/loginAuth"
export default {
  components: {
    login
  },
  methods: {
     async userLogin(loginInfo) {
       try{
      await this.$fireAuth.signInWithEmailAndPassword(
        loginInfo.email, loginInfo.password)
        alert("Login Succes")
       }
       catch(e){
         alert(e)
       }
    }
  }
}
</script>
<style scoped>

</style>