<!-- Page de modification des messages avec son Form -->
<template>
  <form method="PUT" enctype="multipart/form-data">
    <div class="boxstyle" >
      <button class="closeModif" @click="modif = false">X</button>
      <div class="modif_title">
        <p class="style_modif">titre:</p>
        <input
          type="text"
          class="titleM_input"
          placeholder="Votre titre ..."
          v-model="newTitle"
        />
      </div>
      <div class="modif_messageC">
        <p class="style_modif">message:</p>
        <textarea
          class="messageM_input"
          placeholder="Votre message ..."
          cols="20"
          rows="8"
          v-model="newMsg"
        ></textarea>
      </div>
      <p class="info">* veuillez bien remplir tout les champs</p>
      <div class="btnDmodif">
        <button class="post_modif" @click="envoie(msg._id)">envoyez</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "MessageEdit",
  props: {
    msg: Object,
  },
  data() {
    return {
      newMsg: "",
      newTitle: "",
      newPicture: "",
      selectedFile: null,
      updatedAt:"",
      IsAdmin: localStorage.getItem("IsAdmin")
    };
  },
  methods: {

    // requête PUT 
  async envoie(id) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" , Authorization: "Bearer " + localStorage.getItem("token")},
        body: JSON.stringify({ title: this.newTitle, message_content: this.newMsg}),
      };
      const response = await fetch(
        "http://localhost:5000/api/message/modif/" +id,
        requestOptions
      );
      const data = await response.json();
      this.updatedAt = data.updatedAt;
    },
  },
};
</script>

