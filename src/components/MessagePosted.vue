<template>
  <!-- partie avec les listes des messages -->
  <div class="global">
    <div class="BoxListmessages">
      <div v-for="msg in post" :key="msg.id" class="listeMsg">
        <div class="box_top_msg">
          <div class="box_message_photo">
            <img class="pdpProfil" :src="msg.userImageUrl" />
          </div>
          <div class="box_message_userID">
            <p class="userId">
              <span class="userspan">made by </span>{{ msg.name }}
            </p>
          </div>
          <div
            class="modifMsg"
            v-if="msg.userId == user.userId || IsAdmin == true"
          >
            <a class="modifLink">Modifier</a>
          </div>
        </div>
        <div class="box_message_title">
          <p class="titre">{{ msg.title }} :</p>
        </div>

        <div class="box_message_content">
          <p class="titre">{{ msg.message_content }}</p>
        </div>

        <div class="box_image" v-if="empty == false">
          <img class="imageUrl" :src="msg.imageUrl" />
        </div>

        <div class="compteur_div">
          <div class="compteur_left">
            <img class="Like" :src="require('@/assets/like.png')" />
            <img class="dislike" :src="require('@/assets/dislike.jpg')" />
          </div>

          <div
            class="btn_admin"
            v-if="msg.userId == user.userId || IsAdmin == true"
          >
            <a class="bin" @click="deleteMsg(msg._id)">supprimer</a>
          </div>
        </div>
      </div>
    </div>
    <div class="BoxModif" v-show="modif">
      <div class="boxstyle">
        <button class="closeModif">X</button>
        <div class="modif_title">
          <p class=style_modif>titre:</p>
          <input
            type="text"
            class="titleM_input"
            placeholder="Votre titre ..."
          />
        </div>
        <div class="modif_messageC">
          <p class=style_modif>message:</p>
          <textarea
            class="messageM_input"
            placeholder="Votre message ..."
            cols="20"
            rows="8"
          ></textarea>
        </div>
        <div class="modif_image">
          <p class=style_modif>Ajouter une photo</p>
          <input type="file" id="image" />
        </div>
        <p class="info"> * veuillez bien remplir tout les champs</p>
        <div class="btnDmodif">
        <button class="post_modif"> envoyez </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MessagePosted",
  components: {},
  data() {
    return {
      post: [
        { message_content: "" },
        { title: "" },
        { name: "" },
        { imageUrl: "" },
        { userId: "" },
        { _id: "" },
        { userImageUrl: "" },
      ],
      IsAdmin: localStorage.getItem("IsAdmin"),

      user: {
        userId: localStorage.getItem("userId"),
      },
      empty: false,
      modif: true,
    };
  },

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
        const resersed = data.reverse();
        console.log(resersed);

        data.forEach((element) => {
          const {
            title,
            message_content,
            userId,
            imageUrl,
            messageId,
            userImageUrl,
          } = element;

          (this.message_content = message_content),
            (this.title = title),
            (this.userId = userId);
          this.imageUrl = imageUrl;
          this.messageId = messageId;
          this.userImageUrl = userImageUrl;

          console.log();
        });
      });
  },
  methods: {
    ImageEmpty() {
      if (this.imageUrl == "") {
        return false;
      } else {
        return true;
      }
    },

    test(id) {
      axios.get("http://localhost:5000/api/message/uniqueMessage/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        message_content: this.message_content,
        title: this.title,
        name: this.name,
        userId: this.userId,
      });
    },

    deleteMsg(id) {
      axios
        .delete("http://localhost:5000/api/message/deleteMessage/" + id, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response);
          alert("votre message a bien été supprimé !");
          this.$router.go();
        });
    },
  },
};
</script>

<style >

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&display=swap');
/* modif message*/

.BoxModif {
  z-index: 1;
  width: 30%;
  margin-left: 35%;
  margin-right: 35%;
  margin: auto;
  height: 500px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.boxstyle {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}

input[class="titleM_input"] {
  height: 50px;
  width: 100%;
}

textarea[class="messageM_input"] {
  width: 100%;
}

.btnDmodif{
  display: flex;
  justify-content: center;
  align-items: center;
}

.info{
  margin-top: 20px;
  font-size: 11px;
  color: gray;
}

.style_modif{
font-family: 'Oswald', sans-serif;
font-size: 18px;
margin-top: 5px;
}

.closeModif{
color: red;
position: relative;
margin-top: 20px;
right: -480px;
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
  text-decoration: underline;
  color: red;
  margin-right: 20px;
  padding-top: 10px;
}

.modifMsg {
  display: flex;
  margin-left: 300px;
}

.modifLink {
  color: red;
  margin-top: 20px;
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
  width: 100%;
}

.imageUrl {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  height: 200px;
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
    height: 340px;
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
}
</style>