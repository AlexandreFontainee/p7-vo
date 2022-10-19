<template>
  <div class="containerLD">
    <div class="LikeBtn">
      <img
        :src="require('@/assets/like.png')"
        class="likeEdit"
        @click="addlike(msg)"
      />
    </div>
    <div class="compteur">{{ msg.likes }}</div>
  </div>
</template>
<script>
//import axios from "axios";
export default {
  name: "LikeDislike",
  props: {
    msg: Object,
  },

  methods: {
    // like

    async addlike(msg) {
      const userId = localStorage.getItem("userId");
      const like = msg.usersLiked.includes(userId) ? 0 : 1;

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          userId,
          like,
        }),
      };
      const response = await fetch(
        "http://localhost:5000/api/message/like/" + msg._id,
        requestOptions
      );
      const data = await response.json();
      this.updatedAt = data.updatedAt;
      this.$router.go();
    },
  },
};
</script>

<style >
.containerLD {
  display: flex;
  flex-direction: row;
}

.likeEdit {
  width: 30px;
  height: 30px;
}

.compteur {
  margin-left: 7px;
  margin-right: 1px;
  margin-top: 7px;
}


</style>