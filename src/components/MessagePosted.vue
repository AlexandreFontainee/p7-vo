<template>
  <!-- partie avec les listes des messages -->
  <div class="global">
    <div class="BoxListmessages">
      <div v-for="msg in post" :key="msg.message_content" class="listeMsg">


        <div class="box_message_title">
          <p class="titre">{{ msg.title }}</p>
        </div>
        <div class="box_message_content">
          <p class="titre">{{ msg.message_content }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessagePosted",
  components: {},
  data() {
    return {
         
        post:[
        {message_content: ""},
        {title: ""},
        ]
        
      
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
        this.post = data
        console.log(data);

        data.forEach((element) => {
          const { title, message_content } = element;

          (this.message_content = message_content), (this.title = title);

          console.log(title);
        });
      });
  },
};
</script>

<style >
.BoxListmessages {
  width: 100%;
}

.global{
      background-color: #ebedef;
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
}

.buton {
  border: solid black 1px;
  width: 20%;
  height: 30px;
  margin: auto;
}
</style>