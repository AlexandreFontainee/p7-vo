<template>
    <div class="navbarLogin">
      <div class="imgBoxNavbar">
        <img
          class="GroupoLogo"
          alt="logo Groupomania"
        />
      </div>
      <div class="textBoxNavbar">
        <div class="logIn"><router-link to="/login"> LOGIN/ </router-link></div>
        <div class="signUp"><router-link to="/Signup"> SIGNUP </router-link> </div>

      </div>
    </div>
</template>


<script>

export default{
    name: "navBar"
}

</script>


<style scoped>

</style>