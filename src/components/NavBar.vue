<template>
  <div class="navbarLogin">
    <div class="imgBoxNavbar">
      <img
        :src="require('@/assets/logo.png')"
        class="GroupoLogo"
        alt="logo Groupomania"
      />
    </div>
    <div class="textBoxNavbar">
      <div class="logIn"><router-link to="/login"> LOGIN | </router-link></div>
      <div class="signUp">
        <router-link to="/Signup"> | SIGNUP </router-link>
      </div>
    </div>
  </div>
</template>


<script>


export default {
  name: "navBar",
  
  data: function () {
    return {
      goToLogin: function(){
      this.page = "login";
    },
    goToSignUp: function(){
      this.page = "SignUp";
    },
    };
  },
};
</script>


<style scoped>
/* décoration navbar */
body {
  margin: 0;
  padding: 0;
}

.navbarLogin {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fbfcfc;
}

/* partie logo */
.GroupoLogo {
  height: 50px;
  margin-left: 50%;
}

/* partie text */
.textBoxNavbar {
  display: flex;
  flex-direction: row;
  margin-right: 10%;
}

.loginP {
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  margin-right: 7px;
  text-decoration: none;
}
</style>