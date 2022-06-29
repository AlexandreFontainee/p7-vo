<template>
  <!-- envoie du message -->

  <div class="background_box">
    <div class="containerBoxMessage">
      <form method="POST" class="CreateMessage">
        <div class="post_message">
          <div class="img_left">
            <img
              :src="require('@/assets/pdp.png')"
              class="pdp"
              alt="photo de profile"
            />
          </div>

          <div class="label_msg">
            <input
              v-model="message"
              type="text"
              class="Write_msg"
              placeholder="écrivez votre message ..."
              id="message"
            />
          </div>
          <div class="button_send" @click="CreateMessage()"></div>

          <div class="img_right">
            <img
              :src="require('@/assets/Img.png')"
              class="img"
              alt="selection image"
            />
          </div>
        </div>
      </form>
    </div>
      <MessagePosted/>
  </div>
</template>

<script>
import axios from "axios";
import MessagePosted from "@/components/MessagePosted.vue"
export default {
  name: "PostUser",
  components:{
        MessagePosted,
  },
  data() {
    return {
      message: "",
      id: localStorage.getItem("userid"),
    };
  },
  methods: {
    CreateMessage() {
      axios
        .post("http://localhost:5000/api/message/create", {
          message: this.message,
          id: this.id,
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

<style scoped>
.background_box {
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  height: 890px;
}

.containerBoxMessage {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50%;
  padding-top: 3%;
}

.post_message {
  height: 50px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
}

.pdp {
  width: 45px;
  height: 45px;
  margin-left: 20px;
}

.label_msg {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
}

input[class="Write_msg"] {
  width: 90%;
  height: 30px;
  background-color: #ebedef;
  border-radius: 10px;
}

.img {
  width: 45px;
  height: 45px;
  margin-right: 10px;
}



.button_send {
  height: 30px;
  width: 30px;
  margin-right: 30px;
  border: 1px solid black;
}
</style>