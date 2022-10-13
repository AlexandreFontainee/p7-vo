<template>
  <!-- partie avec les listes des messages -->
  <div class="global">
    <div class="BoxListmessages">
      <div v-for="msg in post" :key="msg.id" class="listeMsg">
        <!-- c'est ici que je récupère les donnés de chaque message-->
        <Message v-bind:msg="msg" />
      </div>
    </div>
  </div>
</template>

<script>
import Message from "@/components/Message.vue";

export default {
  name: "MessagePosted",
  components: { Message },
  data() {
    return {
      post: [],
      newMsg: "",
      newTitle: "",
      newPicture: "",

      user: {
        userId: localStorage.getItem("userId"),
        IsAdmin: localStorage.getItem("IsAdmin"),
      },
      empty: false,
      modif: false,
      IsAdmin: localStorage.getItem("IsAdmin"),
    };
  },

  // affichage de tout les messages
  created() {
    fetch("http://localhost:5000/api/message/messagePosted/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.post = data;
        console.log(data);
        // on inverse le sens des données pour toujours avoir les derniers msg
        data.reverse();
    });
  },
};
</script>

<style >
/* police d'écriture */

@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,300&family=Oswald:wght@400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&display=swap");

/* modif message*/

.BoxModif{
  z-index: 1;
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 20px;
    height: 500px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: solid 1px black;
}

.boxstyle {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}

input[class="titleM_input"] {
  height: 50px;
  width: 100%;
  background-color: #ebedef;
}

textarea[class="messageM_input"] {
  width: 100%;
  background-color: #ebedef;
  border: 2px black solid;
}

.btnDmodif {
  display: flex;
  justify-content: center;
  align-items: center;
}

.info {
  margin-top: 20px;
  font-size: 11px;
  color: gray;
}

.titre {
  font-family: "Montserrat", sans-serif;
  color: black;
}

.style_modif {
  font-family: "Oswald", sans-serif;
  font-size: 18px;
  margin-top: 5px;
  cursor:pointer;
}

.closeModif {
  color: red;
  position: relative;
  margin-top: 20px;
  right: -150px;
}

/* modfi message */

.BoxListmessages {
  width: 100%;
}

.global {
  background-color: #ebedef;
  margin-bottom: 20px;
}

.listeMsg {
  width: 30%;
  margin: auto;
  background-color: white;
  min-height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin-top: 50px;
  border: solid 1px black;
}

.buton {
  border: solid black 1px;
  width: 20%;
  height: 30px;
  margin: auto;
}

/* mise en page des messages */
.box_top_msg {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: 2px solid black;
  border-bottom-left-radius: 50px;
}

.box_message_photo {
  margin-top: 10px;
  margin-left: 40px;
}

.pdpProfil {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 2px solid black;
  margin-right: 20px;
}

.userspan {
  font-size: 10px;
  color: gray;
  margin-right: 8px;
}

.userId {
  font-size: 17px;
  font-family: "Oswald", sans-serif;
}

.box_message_title {
  width: 100%;
  align-items: center;
  margin-left: 50px;
}

.box_message_content {
  margin-left: 20px;
  margin-right: 20px;
}

.btn_admin {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}

.bin {
  color: red;
  margin-right: 20px;
  padding-top: 10px;
  font-size: 20px;
  font-family: "Oswald", sans-serif;
  cursor: pointer;
}

.modifMsg {
  display: flex;
  margin-left: 300px;
}

.modifLinke {
  color: red;
  margin-top: 20px;
    font-family: "Oswald", sans-serif;
    cursor: pointer;
}

/* compteur */
.Like {
  width: 30px;
  height: 38px;
}
.dislike {
  width: 50px;
  height: 28px;
  margin-top: 6px;
}

.compteur_left {
  margin-left: 20px;
  margin-bottom: 10px;
}
.compteur_div {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.box_image {
  width: 60%;
  align-items: center;
  margin-left: 20%;
  margin-right: 20%;
}

.imageUrl {

  max-width: 100%;
  min-width:40%;
  height: 200px;
  margin-bottom: 20px;
}

/* partie responsive */

@media screen and (max-width: 425px) {
  .listeMsg {
    width: 70%;
    margin: auto;
    background-color: white;
    min-height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin-top: 50px;
    border: solid 1px black;
  }

  .box_post {
    width: 90%;
    margin-top: 20px;
    margin-left: 5%;
    margin-right: 5%;
    height: 70px;
    display: flex;
    flex-direction: row;
    background-color: white;
    border-radius: 20px;
    justify-content: space-between;
    align-items: center;
  }

  input[class="inputNewMsg"] {
    width: 200px;
    height: 30px;
    background-color: #ebedef;
    border-radius: 10px;
    margin-left: 83px;
  }

  .box_Message {
    width: 80%;
    height: 340px;
    margin-right: 10%;
    margin-left: 10%;
    margin-top: 20px;
    background-color: white;
    border-radius: 30px;
  }

  .box_photo {
    display: none;
  }
  input[id="image"] {
    display: none;
  }

  textarea[class="content_msg"] {
    width: 280px;
    height: 100px;
    background-color: #ebedef;
    border-radius: 10px;
  }

  .btn_echap {
    position: relative;
    right: -140px;
    top: 20px;
    color: red;

  }

   .modifMsg{
  margin-left: 45px;
}

.modifLinke{
  margin-top: 20px;
}

.BoxModif{

    width: 100%;
    margin-left: 15%;
    margin-right: 15%;
    margin: auto;
    margin-top: 90px;
    margin-bottom: 20px;
    height: 500px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: solid 1px black;

}
.closeModif{
  right: -90px;
}
}



/*  Partie responsive  tablette */

@media screen and (min-width: 427px) and (max-width: 769px) {
  .box_post {
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    height: 70px;
    display: flex;
    flex-direction: row;
  }

  .listeMsg {
    width: 50%;
    margin: auto;
    background-color: white;
    min-height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin-top: 50px;
    border: solid 1px black;
  }

  input[class="inputNewMsg"] {
    width: 200px;
  }

  .box_Message {
    width: 50%;
    height: 340px;
    margin-right: 25%;
    margin-left: 25%;
    margin-top: 30px;
    background-color: white;
    border-radius: 30px;
  }

  .right_msgbox {
    display: none;
  }

  .btn_echap {
    right: -160px;
  }
  

   .modifMsg{
  margin-left: 125px;
}

.modifLinke{
  margin-top: 20px;
}

.boxstyle{
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
}

.closeModif{
  right: -110px;
}
}


/*  Partie responsive  pc portable */

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .box_post {
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    height: 70px;
    margin-top: 20px;
  }


  .listeMsg {
    width: 50%;
    margin: auto;
    background-color: white;
    min-height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin-top: 50px;
    border: solid 1px black;
  }

  .box_Message {
    width: 50%;
    height: 500px;
    margin-right: 25%;
    margin-left: 25%;
    margin-top: 30px;
    background-color: white;
    border-radius: 30px;
  }

  textarea[class="content_msg"] {
    width: 230px;
  }

  input[id="image"] {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

   .modifMsg{
  margin-left: 255px;
}

.modifLinke{
  margin-top: 20px;
}
}

@media screen and (min-width: 1440px) and (max-width: 1800px){

     .modifMsg{
  margin-left: 175px;
}

.modifLinke{
  margin-top: 20px;
}

.boxstyle{

      width: 60%;
    margin-left: 20%;
    margin-right: 20%;
}
.closeModif{
  right: -150px;
}
}
</style>