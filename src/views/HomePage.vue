<!-- Page centrale qui contient toute la partie des messages -->
<template>
  <div class="global">
    <navbar />

  <PostichUser/>
  <MessagePosted/>
  <footEr />
  </div>
</template>

<script>
import navbar from "@/components/NavBar.vue";
import footEr from "@/components/FootEr.vue";
import PostichUser from "@/components/PostUser.vue"
import MessagePosted from "@/components/MessagePosted.vue"
import axios from 'axios';
export default {
  name: "HomePage",
  components: {
    PostichUser,
    navbar,
    footEr,
    MessagePosted,
    

  },
  data(){
    return{
      message: ""
    }
  },
  methods:{
    sendMessage(){
      axios.post("http://localhost:5000/api/message/create")
      .then(()=>{
        this.message = "";
        alert('Votre message a bien été publié')
      })
    }
    
  }
  
};
</script>

