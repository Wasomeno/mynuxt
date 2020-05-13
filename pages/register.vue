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
    this.$router.push("/login")
  } catch (e) {
    alert(e)
  }
}   
}
}
</script>