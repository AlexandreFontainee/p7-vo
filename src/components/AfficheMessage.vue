<template>
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
            <a @click="modif = true" class="modifLink">Modifier</a>
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
            <img
              class="Like"
              :src="require('@/assets/like.png')"
              @click="likeIncr()"
            />
            {{ compteur }}
            <img
              class="dislike"
              :src="require('@/assets/dislike.jpg')"
              @click="DisLikeIncr()"
            />
          </div>

          <div
            class="btn_admin"
            v-if="msg.userId == user.userId || IsAdmin == true"
          >
            <a class="bin" @click="deleteMsg(msg._id)">supprimer</a>
          </div>
        </div>
</template>
<script>
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
        { like: "" },
        { dislike: "" },
        { compteur: 0 },
      ],
      IsAdmin: localStorage.getItem("IsAdmin"),
      newMsg: "",
      newTitle: "",
      newPicture: "",

      user: {
        userId: localStorage.getItem("userId"),
      },
      empty: false,
      modif: false,
      compteur: 0,
    };
  },
};
</script>