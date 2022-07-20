<template>
  <div class="box_message">

    <h1 class="titre">{{message.title}}</h1>

    <div class="Msg_content">{{message}}</div>

    <div class="Msg_id">{{message.id}}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MessageType",
  data() {
    return {
        message:{
            id:"",
            message:"",
            title:""
        },
    };
  },
  created() {
   
    axios.get("http://localhost:5000/api/message/uniqueMessage/" , {
      
    })
     .then((response) => {
        this.message = response.data;
        console.log(this.message);
     })
  },
};
</script>