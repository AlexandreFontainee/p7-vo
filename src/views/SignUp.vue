<template>
  <div class="container_global">
    <div class="faux_body">
      <div class="box">
        <h1 class="box_title">Créer un compte</h1>

        <!-- Les champs à remplir en fonction de la page -->
        <form method="Post" class="container_input">
          <div class="input_box">
            <input
              class="input_Style"
              type="text"
              placeholder="Nom d'utilisateur ..."
              required
              v-model="name"
              id="name"
              pattern="[a-zâäàéèùêëîïôöçñA-Z-0-9\s]{3,25}"
            />
          </div>
          <div class="input_box">
            <input
              class="input_Style"
              type="text"
              placeholder="e-mail ..."
              required
              v-model="email"
              id="email"
              pattern="^[a-zA-Z0-9.!#$%'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
            />
          </div>
          <div class="input_box">
            <input
              class="input_Style"
              type="password"
              placeholder="mot de passe ..."
              required
              v-model="password"
              id="password"
              pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})"
            />
          </div>
        </form>

        <!-- Notre bouton d'envoie des infos -->
        <button class="box_Button" @click="signup()">Créer un compte</button>
        <p class="redirect">
          Vous avez déjà un compte ?
          <router-link to="/login">Connectez-vous !</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "signUp",
  data() {
    return {
      email: "",
      name: "",
      password: "",
    };
  },

  methods: {
    signup() {
      let dataInput = {
        email: this.email,
        name: this.name,
        password: this.password,
      };
      console.log(dataInput);
      axios
        .post("http://localhost:5000/api/authJwt/signup", {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
        })
        .then(() => {
          this.$router.push("/login");
        })
        .catch(() => (this.error = "problème lors de la création du compte"));
    },
  
  },
};
</script>

<style scoped>
.faux_body {
  width: 100%;
  height: 940px;
  margin: 0;
  background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
  display: flex;
  align-items: center;
}

.box {
  display: flex;
  flex-direction: column;
  width: 40%;
  align-items: center;
  margin: auto;
  background-color: white;
}

.input_box {
  margin-top: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/*  Mes inputs */

.container_input {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input[class="input_Style"] {
  width: 100%;
  height: 30px;
  background-color: #ebedef;
  border-radius: 10px;
}

.box_Button {
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>