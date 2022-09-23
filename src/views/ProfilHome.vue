<template>
  <navbar />
  <div class="global_background">
    <div class="boxProfile">
      <div class="ContainMainProfil">
        <div class="PicProfile">
          <div>
            <img class="pdpProfil" :src="user.userImageUrl" />
          </div>
          <form method="PUT" enctype="multipart/form-data" class="formcss">
            <input type="file" id="image" @change="onFileSelected" />
            <button class="btncss" @click="onUpload">Upload</button>
          </form>
        </div>
      </div>

      <div class="ContainMainProfil">
        <div class="NameUserProfil">
          <div>
            <p class="named">Nom : {{ user.name }}</p>
          </div>
          <div class="btnPicProfile">
            <img
              :src="require('@/assets/edit.png')"
              class="editButton"
              alt="photo de profile"
              @click="callName()"
            />
          </div>
        </div>
      </div>
      <div class="divCn" v-show="ChangeName">
        <input
          class="New_name"
          placeholder="Entrez votre nouveau nom"
          v-model="NewName"
        />
        <input
          type="button"
          value="Changer de nom"
          class="BtnName"
          @click="UpdateMyName()"
        />
      </div>

      <div class="ContainMainProfil">
        <div class="mdpProfil">
          <div>
            <p class="Password">Password : *****</p>
          </div>
          <div class="btnPicProfile">
            <img
              :src="require('@/assets/edit.png')"
              class="editButton"
              alt="photo de profile"
              @click="callPassword()"
            />
          </div>
        </div>
      </div>
      <div class="divCn" v-show="ChangePassword">
        <input
          class="New_Password"
          placeholder="Entrez votre nouveau mot de passe"
        />
      </div>

      <div class="ContainMainProfil">
        <div class="mdpProfil">
          <div>
            <p class="Password">e-mail : {{ user.email }}</p>
          </div>
          <div class="btnPicProfile">
            <img
              :src="require('@/assets/edit.png')"
              class="editButton"
              alt="photo de profile"
              @click="callEmail()"
            />
          </div>
        </div>
      </div>
      <div class="divCn" v-show="ChangeEmail">
        <input
          class="New_email"
          placeholder="Entrez votre nouvel email "
          v-model="NewEmail"
        />
        <input
          type="button"
          value="Changer d'email "
          class="BtnName"
          @click="UpdateMyEmail()"
        />
      </div>

      <div class="ContainMainProfil">
        <div class="deleteProfil">
          <div class="deleted"><p>Supprimer votre Profil</p></div>
          <div class="btnPicProfile">
            <img
              :src="require('@/assets/edit.png')"
              class="editButton"
              alt="photo de profile"
              @click="deleteThisUser()"
            />
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
        userImageUrl: "",
      },
      file: "",
      IsAdmin: false,
      userImageUrl: "",
      NewName: "",
      NewEmail: "",
      NewPicture: "",
      ChangeName: false,
      ChangeEmail: false,
      ChangePassword: false,
      token: localStorage.getItem("token"),
      userId: localStorage.getItem("userId"),
      selectedFile: null,
    };
  },
  methods: {
    // test image

    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },

    onUpload() {
      let id = localStorage.getItem("userId");
      const fd = new FormData();
      fd.append("images", this.selectedFile);
      axios
        .put("http://localhost:5000/api/authJwt/upload/" + id, fd, {
          userImageUrl: this.selectedFile,
        })
        .then((res) => {
          console.log(res);
        });
    },

    // méthode PUT
    callName() {
      this.ChangeName = true;
    },
    callEmail() {
      return (this.ChangeEmail = true);
    },
    callPassword() {
      return (this.ChangePassword = true);
    },

    UpdateMyName() {
      let id = localStorage.getItem("userId");

      axios.put("http://localhost:5000/api/authJwt/update/" + id, {
        name: this.NewName,
      });
      this.NewName = "";
      this.$router.go();
    },

    UpdateMyEmail() {
      let id = localStorage.getItem("userId");

      axios.put("http://localhost:5000/api/authJwt/update/" + id, {
        email: this.NewEmail,
      });
      this.NewEmail = "";
      this.$router.go();
    },

    //
    // méthode DELETE
    deleteThisUser() {
      let id = localStorage.getItem("userId");
      let confirmDelete = confirm("Etes-vous sûr de supprimer votre compte ?");
      if (confirmDelete == true) {
        axios
          .delete("http://localhost:5000/api/authJwt/delete/" + id, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((response) => {
            console.log(response);
            alert("Votre compte a bien été supprimé ! ");
            localStorage.clear();
            this.$router.push("/login");
          });
      } else {
        // refresh la page
        this.$router.go();
      }
    },
  },
  created() {
    let id = localStorage.getItem("userId");

    axios
      .get("http://localhost:5000/api/authJwt/user/" + id, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        this.user = response.data;
        console.log(this.user);
        localStorage.setItem("userName", response.data.name);
        localStorage.setItem("userEmail", response.data.email);
        localStorage.setItem("IsAdmin", response.data.IsAdmin);
        localStorage.setItem("userImageUrl", response.data.userImageUrl);
      });
  },
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
  width: 30%;
  background-color: #fbfcfc;
  display: flex;
  margin-left: 35%;
  margin-top: 70px;
  margin-right: 35%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  border: solid 1px black;
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
.editButton {
  width: 40px;
  height: 40px;
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

/* input de changement de nom, email, mot de passe */

.divCn {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: auto;
}

.BtnName {
  margin-top: 10px;
}

.New_name {
  width: 50%;
  margin: auto;
  margin-top: 30px;
  height: 30px;
}

.New_email {
  width: 50%;
  margin: auto;
  margin-top: 30px;
  height: 30px;
}

.New_Password {
  width: 50%;
  margin: auto;
  margin-top: 30px;
  height: 30px;
}

/* responsive partie */

@media screen and (max-width: 425px) {
  .ContainMainProfil {
    width: 50%;
    margin: auto;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 30px;
  }

  .pdpProfil {
    margin-left: 20px;
  }

  input[id="image"] {
    display: none;
  }

  .btncss {
    display: none;
  }

  .btnPicProfile {
    display: none;
  }

  .named {
    margin-right: 0;
    margin-top: 22px;
  }

  .NameUserProfil {
    margin-top: 0;
  }

  .Password{
    margin-right: 0;
    margin-top: 22px;
  }

  .deleted{
    margin-right: 0;
  }

  .global_background{
    height: 650px;
  }
}

/*  Partie responsive  tablette */

@media screen and (min-width:427px) and (max-width:769px){

  .ContainMainProfil{
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
    border: solid 1px black;
  }

  .pdpProfil{
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 2px solid black;
    margin-right: 20px;
    margin-left: 10px;
  }
}

/*  Partie responsive  pc portable */

@media screen and (min-width:769px) and (max-width:1024px){

  .ContainMainProfil{
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
    border: solid 1px black;
  }

  .pdpProfil{
    width: 130px;
    height: 130px;
    border-radius: 100%;
    border: 2px solid black;
    margin-right: 50px;
  }
}
</style>