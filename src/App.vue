<template>
  <div id="app">
    <div class="navbarLogin">
      <div class="imgBoxNavbar">
        <img
          class="GroupoLogo"
          alt="logo Groupomania"
          src="./assets/logo.png"
        />
      </div>
      <div class="textBoxNavbar">
        <div class="logIn"><router-link to="/"> LOGIN/ </router-link></div>
        <div class="signUp"><a class="loginP" href="#"> SIGNUP</a></div>
      </div>
    </div>

    <div class="midBoxMainLogin">
      <form action="/auth" method="post">
        <div class="boxLogin">
          <div class="boxIn">
            <input
              name="loginLabel"
              placeholder="Nom d'utilisateur ..."
              type="text"
              id="usename"
              required
            />
          </div>
          <div class="boxIn">
            <input
              name="loginLabel"
              placeholder="Mot de Passe ..."
              type="text"
              id="password"
              required
            />
          </div>
          <div class="connected">
            <input class="connect" type="submit" value="Se connecter" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      messages: ["coucou", "aze"],
    };
  },
  created() {
    axios.get("http://localhost:5000/messages");
  },
};
</script>



<style scoped>
body {
  background-color: #dae0e6;
  margin: 0;
}

/* décoration navbar */
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

/* partie texte */
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

/* milieu de page */
.midBoxMainLogin {
  background-image: linear-gradient(to top, #cf8173 0%, #cfc7f8 100%);
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 3%;
  width: 50%;
  height: 700px;
  border: 1px black solid;
  border-radius: 10px;
}

.boxLogin {
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
}

.boxIn {
  width: 100%;
  background-color: white;
  margin-top: 100px;
}

input[name="loginLabel"] {
  width: 100%;
  height: 80px;
}

.connected {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}

.connect {
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: rgba(220, 0, 0, 1);
  background-image: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0)
  );
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
}

.connect:hover {
  background-color: rgba(255, 0, 0, 1);
}

.connect:active {
  box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6),
    inset 2px 2px 3px rgba(0, 0, 0, 0.6);
}
</style>


