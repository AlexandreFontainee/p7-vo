<template>
  <div class="navbarLogin">
    <div class="imgBoxNavbar">
      <div>
      <img
        :src="require('@/assets/logo.png')"
        class="logoLeft"
        alt="logo Groupomania"
        @click="goToHome()"
      />
      </div>
      <div>
       <img
        :src="require('@/assets/message.jpg')"
        class="logoLeft2"
        alt="logo Groupomania"
        @click="goToHome()"
      />
      </div>
    </div>
    <div class="logo_right">
      <div class="textBoxNavbar">
        <img
          :src="require('@/assets/pdp.png')"
          class="GroupoLogo"
          alt="photo de profile"
          @click="goToLoProfile()"
        />
      </div>
      <div class="textBoxNavbar">
        <img
          :src="require('@/assets/logout.png')"
          class="GroupoLogo"
          alt="image pour se déconnecter"
          @click="logout()"
        />
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "navBar",

  data: function () {
    return {
      goToLoProfile: function () {
        this.$router.push('/profile') ;
      },
      logout: function () {
        this.$router.push('/login')
        .then(
          localStorage.clear("userId"),
          localStorage.clear("token"),
          localStorage.clear("userEmail"),
          localStorage.clear("userName")
        )
      },
      goToHome: function(){
        this.$router.push('/HomePage')
        }
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
.imgBoxNavbar{
  display: flex;
  flex-direction: row;
}

.GroupoLogo {
  height: 50px;
  margin-right: 50px;
}
.logoLeft{
  height: 50px;
  margin-left: 50px;
}
.logoLeft2{
  height: 50px;
  margin-left: 30px;
}

/* partie text */

.logo_right{

  display: flex;
  flex-direction: row;
}

.textBoxNavBar {
  display: flex;
  flex-direction: row;
  margin-right: 100%;
}

.loginP {
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  margin-right: 7px;
  text-decoration: none;
}
</style>