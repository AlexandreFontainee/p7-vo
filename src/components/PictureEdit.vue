<template>
  <form method="PUT" enctype="multipart/form-data">
    <input type="file" id="image" @change="SelectPic" />
    <div class="uploadBtn">
      <button class="btncss" @click="envoie(msg._id)">Changer de photo</button>
    </div>
  </form>
</template>

<script>
import axios from "axios"
export default {
  name: "PictureEdit",
  props: {
    msg: Object,
  },
  data() {
    return {
      selectedFile: "",
      IsAdmin: localStorage.getItem("IsAdmin"),
    };
  },
  methods: {
    SelectPic(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile)
    },

    envoie(id) {

       const fd = new FormData();
      fd.append("images", this.selectedFile);
      axios
        .put("http://localhost:5000/api/message/modif/image/" + id, fd, {
          userImageUrl: this.selectedFile,
        })
        .then((res) => {
          console.log(res);
        });

    },
  },
};
</script>