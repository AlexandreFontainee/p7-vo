<template>
  <div class="global">
    <navbar />
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
        <input type="text" class="Write_msg" placeholder="écrivez votre message ...">
        </div>
        <div class="img_right">
            <img
          :src="require('@/assets/Img.png')"
          class="img"
          alt="selection image"
        />
        </div>


        </div>

        <div class="messages"></div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/NavBar.vue";

export default {
  name: "HomePage",
  components: {
    navbar,
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
  padding-top:3% ;
}

.post_message {
  height: 50px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
}

.pdp{
    width: 45px;
    height: 45px;
    margin-left: 20px;
}

.label_msg{
    width:100%;
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

.img{
    width: 45px;
    height: 45px;
    margin-right: 10px;
}
</style>