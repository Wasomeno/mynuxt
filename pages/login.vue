<template>
 <login :submitForm="userLogin"/>
</template>

<script>
import login from "../components/loginAuth"
export default {
  data() {
    return{
    }
  },
  components: {
    login
  },
  methods: {
     async userLogin(loginInfo) {
       try{
        await this.$fireAuth.signInWithEmailAndPassword(
        loginInfo.email, loginInfo.password)
        await this.$fireAuth.setPersistence(this.$fireAuthObj.Auth.Persistence.LOCAL)
        return this.$fireAuth.signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
        this.$router.push("/")
        this.$toast.success("Login Success !", {
          theme: "bubble",
          position: "top-center",
          duration: "1500"
        })
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