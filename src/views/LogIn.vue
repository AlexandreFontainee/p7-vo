<template>
<div class="container-global">
<div class="faux_body">
  <div class="box">

    <h1 class="box_title" >Se connecter</h1>

<!-- Les champs à remplir en fonction de la page -->
<form method="POST" class="container_input">
  
    <div class="input_box">
      <input class="input_Style" type="text" placeholder="e-mail ..." required v-model="email" id="email" pattern="[a-zâäàéèùêëîïôöçñA-Z0-9.-_]+[@]{1}[a-zA_Z0-9.-_]+[.]{1}[a-z]{2,4}">
    </div>
    <div class="input_box">
      <input class="input_Style" type="password" placeholder="mot de passe ..." required v-model="password" id="password"  pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})">
    </div>
    </form>

    <div v-show="empty" >
      <p>Information non correctes</p>
    </div>
   
<!-- Notre bouton d'envoie des infos -->
    <button class="box_Button" @click="login()" > connexion </button>
     <p class="redirect" >Pas encore inscrit ? <router-link to="/signup">Rejoignez-nous !</router-link></p>

  </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router/index'

export default {
  name: "LogIn",
  components: {},
  data(){
    return{
      email: "",
      password: "",
      empty: false
    }
  },
methods: {
        login(){
            if(!this.email || !this.password){
              return this.empty = true;
            }
            axios.post("http://localhost:5000/api/authJwt/login",{
              email : this.email,
              password: this.password
            })
            .then(function (response){
              localStorage.setItem("userId",  response.data.userId);
              localStorage.setItem("token",   response.data.token);
              router.push("/HomePage");
            })
            .catch((error)=>{
              this.empty = true;
              console.log(error)
            })

        }
    }
};
</script>



<style scoped>

.faux_body{
  width: 100%;
  height: 940px;
  margin: 0;
  background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
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


