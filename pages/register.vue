<template>
<register :submitForm="userRegister"/>
</template>

<script>
import register from "../components/registerAuth"
export default {
  components: {
    register
  },
  methods: {
    async userRegister(registerInfo) {
  try {
    await this.$fireAuth.createUserWithEmailAndPassword(
      registerInfo.email,
      registerInfo.password
    )
    this.$toast.success("Registration Success !", {
          theme: "bubble",
          position: "top-center",
          duration: "1500"
        })
    this.$router.push("/login")
  } catch (e) {
    this.$toast.error(e, {
          theme: "bubble",
          position: "top-center",
          duration: "1500"
        })
  }
}   
}
}
</script>