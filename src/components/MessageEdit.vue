<template>
<form method="PUT" enctype="multipart/form-data" >
  <div class="boxstyle">
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
    <div class="modif_image">
      <p class="style_modif">Ajouter une photo</p>
      <input type="file" id="image" @change="selectedFile"/>
    </div>
    <p class="info">* veuillez bien remplir tout les champs</p>
    <div class="btnDmodif">
      <button class="post_modif" @click="envoie(msg._id)">envoyez</button>
    </div>
  </div>
</form>
</template>
<script>
import axios from "axios";
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
      selectedFile:"",
    };
  },
  methods: {
  FileSelected(event) {
      this.selectedFile = event.target.files[0];
    },

    envoie(id) {
    const fd = new FormData();
      fd.append("images", this.imageUrl);
      fd.append("message_content", this.message_content);
      fd.append("title", this.title);
      axios.put(
        "http://localhost:5000/api/message/modif/" + id, fd,
        {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        });
      alert('test')
    },

  
  },
};
</script>