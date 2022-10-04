<!-- Pied de page classique -->
<template>
    <div class="footBox">
        <p class="copy">© 2020 Alexandre All rights reserved.</p>
    </div>
</template>

<script>
export default {
    name:"footEr"
}
</script>

<style scoped>

.footBox{
    background-image: linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%);
 background-blend-mode: normal, lighten, soft-light;
 height: 60px;
 width: 100%;
 bottom: 0;
 position: relative;
 display: flex;
 flex-direction: row;
 align-items: center;
}

.copy{
    margin: auto;
    color: #fffffff1;
}

</style>

