<template>
    <!-- partie avec les listes des messages -->
        <div class="BoxListmessages">
          <div class="listeMsg">
            <p>test</p>
          </div>
          <div class="listeMsg">
            <p>test</p>
          </div>
          <div class="listeMsg">
            <p>{{ListeMessage.message}}</p>
          </div>
          <div class="listeMsg">
            <p>test</p>
          </div>
          <div class="buton" @click="afficheListMessage()">
          </div>
        </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "MessagePosted",
    data(){
        return{
            ListeMessage:{
            name:"",
           _id:"",
            message: ""
            }
        }
    },
    methods:{
        afficheListMessage(){
         axios.get("http://localhost:5000/api/message/messagePosted/" ,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            }
         }).then((Response)=>{ Response.json
            console.log(Response)
            this.ListeMessage = Response.data

         })
         }
    }
}
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

.buton{
    border: solid black 1px;
    width: 20%;
    height: 30px;
    margin: auto;
}
</style>