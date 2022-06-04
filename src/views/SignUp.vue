<template>
<div class="container_global">
<div class="faux_body">
  <div class="box">

    <h1 class="box_title" >Créer un compte</h1>

<!-- Les champs à remplir en fonction de la page -->
  <div class="container_input">
    <div class="input_box">
      <input class="input_Style" type="text" placeholder="Nom d'utilisateur ..." required >
    </div>
    <div class="input_box">
      <input class="input_Style" type="text" placeholder="e-mail ..." required >
    </div>
    <div class="input_box">
      <input class="input_Style" type="password" placeholder="mot de passe ..." required>
    </div>
    </div>
   
<!-- Notre bouton d'envoie des infos -->
    <button class="box_Button" @click="Btn_check_log"> Créer un compte </button>
     <p class="redirect">Vous avez déjà un compte ? <router-link to="/login">Connectez-vous !</router-link></p>

  </div>
  </div>
  </div>
</template>

<script>
export default {
    name: "signUp", 
    methods: {
        Btn_check_log(){
            this.$router.push('/profile')
        }
    }
}

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