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
        this.$toast.success("Login Success !", {
          theme: "bubble",
          position: "top-center",
          duration: "1500"
        })
        this.$router.push("/")
       }
       catch(e){
        this.$toast.error(e, {
          theme: "bubble",
          position: "top-center",
          duration: "1600"
        })
       }
    }
  }
}
</script>
<style scoped>

</style>