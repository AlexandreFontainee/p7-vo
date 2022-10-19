<!-- main page de mes messages qui affiche toutes leurs data  -->
<template>
  <div class="box_top_msg">
    <div class="box_message_photo">
      <img class="pdpProfil" :src="msg.userImageUrl" />
    </div>
    <div class="box_message_userID">
      <p class="userId"><span class="userspan">made by </span>{{ msg.name }}</p>
    </div>
    <div class="modifMsg" v-if="msg.userId == user.userId">
      <div class="modifLinke">
        <a @click="modifyMessage()" class="modifLink">Modifier</a>
      </div>
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

  <div class="pictureModif" v-if="msg.userId == user.userId">
    <PictureEdit v-bind:msg="msg" />
  </div>

  <div class="BoxModif" v-if="modif">
    <MessageEdit v-bind:msg="msg" />
  </div>
  <div class="LikeDl">
    <LikeDislike v-bind:msg="msg"/>
  </div>

  <div class="btn_admin" v-if="msg.userId == user.userId || IsAdmin == true">
    <a class="bin" @click="deleteMsg(msg._id)">supprimer</a>
  </div>
</template>
<script>
import axios from "axios";
import MessageEdit from "@/components/MessageEdit.vue";
import PictureEdit from "@/components/PictureEdit.vue";
import LikeDislike from "@/components/LikeDislike.vue"

export default {
  name: "MessageVue",
  components: {
    MessageEdit,
    PictureEdit,
    LikeDislike,
  },
  props: {
    msg: Object,
  },
  data() {
    return {
      user: {
        userId: localStorage.getItem("userId"),
      },
      modif: false,
      empty: false,
      IsAdmin: "",
      selectedFile: null,
      updatedAt: "",
    };
  },
  mounted() {
    this.IsAdmin = JSON.parse(localStorage.getItem("IsAdmin"));
  },

  methods: {
    modifyMessage() {
      this.modif = true;
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

<style>
.uploadBtn {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.LikeDl{
  position: relative;
  left: -220px;
}
</style>

