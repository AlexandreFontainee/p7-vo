<template>
  <!-- partie avec les listes des messages -->
  <div class="BoxListmessages">
    <div class="listeMsg">
      <p>{{ post }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessagePosted",
  data() {
    return {
      post:[],
      message: this.message,
        id: ""
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

        data.forEach((element) => {
          const { _id, message } = element;

          this.message = message, 
          this._id = _id;

          console.log( this.message);
        });
      });
  },
};
</script>

<style >
.BoxListmessages {
  width: 100%;
}

.listeMsg {
  width: 50%;
  margin: auto;
  background-color: white;
  min-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  margin-top: 50px;
}

.buton {
  border: solid black 1px;
  width: 20%;
  height: 30px;
  margin: auto;
}
</style>