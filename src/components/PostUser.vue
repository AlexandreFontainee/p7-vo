<template>
  <div class="glob">
    <div class="paddingbox">
      <div class="box_post">
        <div class="left_div">
          <div>
            <img
              :src="require('@/assets/pdp.png')"
              class="pdp"
              alt="photo de profile"
            />
          </div>
          <div>
            <p>{{ user.userName }}</p>
          </div>
        </div>
        <div class="right_div">
          <input
            type="text"
            @click="newMessage = true"
            class="inputNewMsg"
            placeholder="écrire un nouveau message"
          />
        </div>
      </div>
      <!-- @click affiche les inputs pour le nouveau message  -->
      <div v-if="newMessage" class="box_Message">
        <form method="POST">
          <div class="msg_title">
            <button class="btn_echap" @click="newMessage = false">X</button>
            <p class="t_titre">Votre titre:</p>

            <input
              type="text"
              class="input_titre"
              placeholder="Votre titre"
              id="title"
              v-model="title"
            />
          </div>
          <div class="container_msg">
            <div class="left_msgbox">
              <div class="input_msg">
                <p class="t_msg">Votre Message:</p>
                <textarea
                  type="textarea"
                  class="content_msg"
                  placeholder="écrivez votre message ..."
                  id="message"
                  v-model="message_content"
                />
              </div>
            </div>
            <div class="right_msgbox">
              <div class="box_photo">
                <p class="t_photo">Ajouter une photo</p>
                <img
                  :src="require('@/assets/edit.png')"
                  class="photo_msg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="box_btn_msg">
            <button class="send_msg" @click="CreateMessage()">Envoyez</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "postichUser",
  components: {},
  data() {
    return {
      newMessage: false,
      title: "",
      message_content: "",
      user: {
        userName: localStorage.getItem("userName"),
      },
    };
  },
  methods: {
    CreateMessage() {
      axios
        .post("http://localhost:5000/api/message/create", {
          message_content: this.message_content,
          title: this.title,
        })
        .then((response) => {
          console.log(response);
          alert("Votre message a bien été publié");
          this.$router.go("/HomePage");
        });
    },
  },
};
</script>

<style >
.glob {
  background-color: #ebedef;
}
.paddingbox{
  padding-top: 2%;
}

.box_post {
  width: 30%;
  margin-left: 35%;
  margin-right: 35%;
  height: 70px;
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
}

.btn_echap {
  position: relative;
  right: -240px;
  top: 20px;
  color: red;
}

.left_div {
  display: flex;
  flex-direction: row;
  margin-left: 30px;
}

.right_div {
  margin-right: 50px;
}

input[class="inputNewMsg"] {
  width: 300px;
  height: 30px;
  background-color: #ebedef;
  border-radius: 10px;
}

.pdp {
  height: 40px;
  width: 40px;
  margin-right: 20px;
}

/* inputs du nouveau message */

.box_Message {
  width: 30%;
  height: 340px;
  margin-right: 35%;
  margin-left: 35%;
  margin-top: 30px;
  background-color: white;
  border-radius: 30px;
}

.msg_title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container_msg {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.left_msgbox {
  margin-left: 30px;
}

textarea[class="content_msg"] {
  width: 300px;
  height: 100px;
  background-color: #ebedef;
  border-radius: 10px;
}

input[class="input_titre"] {
  width: 200px;
  height: 30px;
  background-color: #ebedef;
  border-radius: 10px;
}

.box_photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
}

.photo_msg {
  width: 70px;
  height: 70px;
}

.t_photo {
  text-decoration: underline red;
  font-weight: bold;
  font-size: 18px;
}

.t_msg {
  text-decoration: underline red;
  font-weight: bold;
  font-size: 18px;
}

.t_titre {
  text-decoration: underline red;
  font-weight: bold;
  font-size: 18px;
}

.box_btn_msg {
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 20px;
}
</style>