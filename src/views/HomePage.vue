<template>
  <div class="global">
    <navbar />

    <!-- envoie du message -->
    <div class="background_box">
      <div class="containerBoxMessage">
        <div class="post_message">
          <div class="img_left">
            <img
              :src="require('@/assets/pdp.png')"
              class="pdp"
              alt="photo de profile"
            />
          </div>
          <div class="label_msg">
            <input
              type="text"
              class="Write_msg"
              placeholder="écrivez votre message ..."
            />
          </div>
          <div class="img_right">
            <img
              :src="require('@/assets/Img.png')"
              class="img"
              alt="selection image"
            />
          </div>
        </div>

        <!-- partie avec les listes des messages -->
        <div class="BoxListmessages">

            <div class="listeMsg">
              <p>test</p>
            </div>
            <div class="listeMsg">
              <p>test</p>
            </div>
            <div class="listeMsg">
              <p>test</p>
            </div>
            <div class="listeMsg">
              <p>test</p>
            </div>
        </div>
      </div>
    </div>
  </div>
  <footEr/>
</template>

<script>
import navbar from "@/components/NavBar.vue";
import footEr from "@/components/FootEr.vue";
export default {
  name: "HomePage",
  components: {
    navbar,
    footEr,
  },
};
</script>

<style scoped>
.background_box {
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  height: 890px;
}

.containerBoxMessage {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50%;
  padding-top: 3%;
}

.post_message {
  height: 50px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
}

.pdp {
  width: 45px;
  height: 45px;
  margin-left: 20px;
}

.label_msg {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
}

input[class="Write_msg"] {
  width: 90%;
  height: 30px;
  background-color: #ebedef;
  border-radius: 10px;
}

.img {
  width: 45px;
  height: 45px;
  margin-right: 10px;
}

.BoxListmessages{
  width: 100%;

}

.listeMsg{
  width: 100%;
  background-color: white;
  min-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  margin-top: 50px;
  }

</style>