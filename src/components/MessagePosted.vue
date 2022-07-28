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
              <span class="userspan">made by </span>{{ msg.UserId }}
            </p>
          </div>
        </div>
        <div class="box_message_title">
          <p class="titre">{{ msg.title }} :</p>
        </div>

        <div class="box_message_content">
          <p class="titre">{{ msg.message_content }}</p>
        </div>

        <div class="btn_admin" v-show="showDelete">
          <button  class="bin" @click="deleteMsg()"></button>
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
      post: [{ message_content: "" }, { title: "" }, { UserId: "" }],
      IsAdmin: localStorage.getItem("IsAdmin"),
      showDelete: false,
    };
  },

  created() {
    let IsAdmin = localStorage.getItem("IsAdmin");
    if(IsAdmin === true ){
     return this.showDelete === true
    }

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
          const { title, message_content, UserId } = element;

          (this.message_content = message_content),
            (this.title = title),
            (this.UserId = UserId);

          console.log(title);
        });
      });
  },
  methods: {
    deleteMsg() {

        axios
          .get("http://localhost:5000/api/message/uniqueMessage")
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
  width: 50px;
}

.bin {
  width: 50px;
  height: 50px;
}
</style>