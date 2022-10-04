<!-- Page d'entrée  -->
<template>
    <div class="container-global">

        <div class="box">
        <p class="t1">Bienvenue sur Groupomania</p>
        <p class="t2">Notre nouveau réseau social d'entreprise </p>
        <router-link to="/Signup">Rejoignez nous !</router-link>
        </div>
    </div>
     <router-view></router-view>
</template>

<script>
export default {
    name:'basePage'
}
</script>


<style scoped>
.container-global{
    width: 100%;
    height: 940px;
    background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.box{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    align-items: center;
    margin-top: 290px;
}

.t1{
    font-size: 48px;
    color: white;
    margin-bottom: 10px;

}
.t2{
    font-size: 20px;
    color: white;
}

</style>

