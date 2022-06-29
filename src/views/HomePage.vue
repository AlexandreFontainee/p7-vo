<template>
  <div class="global">
    <navbar />

  <PostUser/>
  <footEr />
  </div>
</template>

<script>
import navbar from "@/components/NavBar.vue";
import footEr from "@/components/FootEr.vue";
import PostUser from "@/components/PostUser.vue"
import axios from 'axios';
export default {
  name: "HomePage",
  components: {
    navbar,
    footEr,
    PostUser,

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

