<template>
  <div id="App">
    
    <header>
        <div class="container">
        <img src="./assets/logo.png" class="logo" alt="Logo Groupomania " />
        <nav class="redirect"><p> <router-link to="/Login">Rejoignez l'aventure groupomania !</router-link></p></nav>
        </div>
    </header>
    <router-view></router-view>


    
</div>  
</template>

<script>

</script>


 <style>
 body, html {
  margin: 0;
  padding: 0;
  height: 100%; 
}

.logo{
    width: 50%;
}
 </style>