<template>
  <!-- partie avec les listes des messages -->
  <div class="global">
    <div class="BoxListmessages">
      <div v-for="msg in post" :key="msg.message_content" class="listeMsg">
        <div class="box_top_msg">
          <div class="box_message_photo">
            <img class="pdpProfil" :src="require('@/assets/akita.png')" />
          </div>
          <div class="box_message_userID">
            <p class="userId">
              <span class="userspan">made by </span>{{ msg.name }}
            </p>
          </div>
        </div>
        <div class="box_message_title">
          <p class="titre">{{ msg.title }} :</p>
        </div>

        <div class="box_message_content">
          <p class="titre">{{ msg.message_content }}</p>
        </div>

        <div class="box_image">
          <p class="titre">{{ msg.imageUrl }}</p>
        </div>

        <div class="btn_admin" v-if="msg.name == user.name || IsAdmin == true">
          <a class="bin"  @click="deleteMsg()"         
          >supprimer</a>
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
      post: [{ message_content: "" }, { title: "" }, { name: "" }, {imageUrl:""}],
      IsAdmin: localStorage.getItem("IsAdmin"),

      user:{
        name: localStorage.getItem('userName')
      }
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
          const { title, message_content, UserId, imageUrl } = element;

          (this.message_content = message_content),
            (this.title = title),
            (this.UserId = UserId);
            (this.imageUrl = imageUrl)

          console.log(title);
        });
      });
  },
  methods: {
    deleteMsg() {

        axios
          .delete("http://localhost:5000/api/message/deleteMessage")
          .then((response) => {
            console.log(response);
            alert("Votre message a bien été supprimé ! ");
            this.$router.push("/HomePage");
          });
      
    },

  },
};
</script>

<style >
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
}
</style>