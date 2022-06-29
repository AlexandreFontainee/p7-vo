<template>
  <navbar />
  <div class="global_background">
    <div class="boxProfile">
      <div class="ContainMainProfil">
        <div class="PicProfile">
          <div>
            <img class="pdpProfil" :src="require('@/assets/akita.png')" />
          </div>
          <div class="btnPicProfile">
            <input class="editPdp" type="button" value="Edit Picture" />
          </div>
        </div>
      </div>

      <div class="ContainMainProfil">
        <div class="NameUserProfil">
          <div>
            <p class="named">{{ user.name }}</p>
          </div>
          <div class="btnPicProfile">
            <input class="editPdp" type="button" value="Edit Name" />
          </div>
        </div>
      </div>

      <div class="ContainMainProfil">
        <div class="mdpProfil">
          <div>
            <p class="Password">{{ user.name }}</p>
          </div>
          <div class="btnPicProfile">
            <input class="editPdp" type="button" value="Edit Password" />
          </div>
        </div>
      </div>

      <div class="ContainMainProfil">
        <div class="mdpProfil">
          <div>
            <p class="Password">{{ user.email }}</p>
          </div>
          <div class="btnPicProfile">
            <input class="editPdp" type="button" value="Edit email" />
          </div>
        </div>
      </div>

      <div class="ContainMainProfil">
        <div class="deleteProfil">
          <div class="deleted"><p>Supprimer votre Profil</p></div>
          <div class="btnPicProfile">
            <input class="editPdp" type="button" value="Supprimer" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <footEr />
</template>

<script>
import navbar from "@/components/NavBar.vue";
import footEr from "@/components/FootEr.vue";
import axios from "axios";

export default {
  name: "ProfilHome",
  components: {
    navbar,
    footEr,
  },
  data() {
    return {
      user: {
        id: localStorage.getItem("userId"),
        email: "",
        name: "",
      },
    token: localStorage.getItem("token"),
      userId: localStorage.getItem("userId"),
    };
  },
  methods: {
   

  },
  created(){
    let id = localStorage.getItem("userId");

    axios.get("http://localhost:5000/api/authJwt/user/:id" + id ,{
        headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
      }).then((response)=>{
        this.user = response.data
        console.log(this.user)
        localStorage.setItem('userName', response.data.name);
        localStorage.setItem('userEmail', response.data.email);

      })
  }
 
};
</script>

<style scoped>
.global_background {
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  height: 900px;
}

.boxProfile {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}

.logPic {
  height: 40px;
  margin-top: 5px;
  padding-right: 10px;
}

.ContainMainProfil {
  width: 50%;
  background-color: #fbfcfc;
  display: flex;
  margin-left: 25%;
  margin-top: 70px;
  margin-right: 25%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
}

.PicProfile {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.pdpProfil {
  width: 130px;
  height: 130px;
  border-radius: 100%;
  border: 2px solid black;
  margin-right: 20px;
}

.editPdp {
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: rgba(220, 0, 0, 1);
  background-image: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0)
  );
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
}

.editPdp:hover {
  background-color: rgba(255, 0, 0, 1);
}

.editPdp:active {
  box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6),
    inset 2px 2px 3px rgba(0, 0, 0, 0.6);
}

.named {
  font-size: 18px;
  font-weight: 900;
  margin-right: 40px;
  margin-top: 30px;
}

.NameUserProfil {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.mdpProfil {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.Password {
  font-size: 18px;
  font-weight: 900;
  margin-right: 40px;
  margin-top: 30px;
}

.deleted {
  font-size: 18px;
  font-weight: 900;
  margin-right: 40px;
}

.deleteProfil {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.testDelete {
  height: 30px;
  width: 50px;
}
</style>