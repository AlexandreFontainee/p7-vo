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
          <button @click="test()">test</button>
        </div>

        <div
          class="btn_admin"
          v-if="msg.userId == user.userId || IsAdmin == true"
        >
          <a class="bin" @click="deleteMsg()">supprimer</a>
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
      ],
      IsAdmin: localStorage.getItem("IsAdmin"),

      user: {
        userId: localStorage.getItem("userId"),
      },
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
          const { title, message_content, userId, imageUrl } = element;

          (this.message_content = message_content),
            (this.title = title),
            (this.userId = userId);
          this.imageUrl = imageUrl;

          console.log(title);
        });
      });
  },
  methods: {
    test() {
      let id = localStorage.getItem("userId");
      axios.get("http://localhost:5000/api/message/uniqueMessage/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
    },

    deleteMsg() {
      let id = localStorage.getItem("token");
      axios
        .delete("http://localhost:5000/api/message/deleteMessage/" + id, {
          title: this.title,
          message: this.message_content,
          userId: this.userId,
        })
        .then((response) => {
          console.log(response);
          alert("Votre message a bien été supprimé ! ");
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
    width: 170px;
    height: 30px;
    background-color: #ebedef;
    border-radius: 10px;
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

.box_photo{
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


</style>