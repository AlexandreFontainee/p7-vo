<template>
<div class="faux_body">
  <div class="box">
<!-- indication sur quelle page nous sommes Login / Signup-->
    <h1 class="box_title" v-if="page == 'login'">Se connecter</h1>
    <h1 class="box_title" v-else>Créer un compte</h1>
    <p class="box_Page" v-if="page == 'login'">Besoin d'un comtpe ? <span @click="goToSignUp()"> Créer un compte</span></p>
    <p class="box_Page" v-else>Se connecter ! <span @click="goToLogin()"> Se connecter</span></p>

<!-- Les champs à remplir en fonction de la page -->
  <div class="container_input">
    <div class="input_box">
      <input class="input_Style" type="text" placeholder="Nom d'utilisateur ..." required v-if="page == 'SignUp'">
    </div>
    <div class="input_box">
      <input class="input_Style" type="text" placeholder="e-mail ..." required >
    </div>
    <div class="input_box">
      <input class="input_Style" type="password" placeholder="mot de passe ..." required>
    </div>
    </div>
   
<!-- Notre bouton d'envoie des infos -->
    <button class="box_Button" v-if="page == 'login'"> connexion </button>
    <button class="box_Button" v-else> Créer un compte </button>

  </div>
  </div>
</template>

<script>
// mes imports
export default {
  name: "LogIn",
  components: {},

  data() {
    return {
      page: "SignUp",
    };
  },

  methods: {
    // mes deux fonctions pour échanger entre la page login et signup
    goToLogin: function () {
      this.page = "login";
    },
    goToSignUp: function () {
      this.page = "SignUp";
    },
  },

};
</script>



<style scoped>
.faux_body{
  width: 100%;
  height: 700px;
  margin: 0;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  display: flex;
  align-items: center;
}


.box{
  display: flex;
  flex-direction: column;
    width: 40%;
    align-items: center;
    margin: auto;
  background-color: white;
}

.input_box{
  margin-top: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/*  Mes inputs */

.container_input{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input[class="input_Style"]{
    width: 100%;
    height: 30px;
    background-color: #EBEDEF;
    border-radius: 10px;
  
}

.box_Button{
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}


</style>


