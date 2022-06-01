<template>
  <div class="navbar">
    <div class="glob">
      <div>
        <img class="logo" src="/Front/images/logo.png" alt="logo groupomania" />
      </div>
      <div class="home">
        <img class="homeLogo" src="/Front/images/home.PNG " alt="logo home" />
        <p>Home</p>
      </div>
    </div>
    <div class="pdp">
      <img class="logPic" src="/Front/images/logout.png" alt="logout" />
      <p>Se déconnecter</p>
    </div>
  </div>

  <div class="ContainMainProfil">
    <div class="PicProfile">
      <div><img class="pdpProfil" src="./assets/akita.png" /></div>
      <div class="btnPicProfile">
        <input class="editPdp" type="button" value="Edit Picture" />
      </div>
    </div>
  </div>

  <div class="ContainMainProfil">
    <div class="NameUserProfil">
      <div><p class="named">Nom: Josette</p></div>
      <div class="btnPicProfile">
        <input class="editPdp" type="button" value="Edit Name" />
      </div>
    </div>
  </div>

  <div class="ContainMainProfil">
    <div class="mdpProfil">
      <div><p class="Password">Mot de Passe: **********</p></div>
      <div class="btnPicProfile">
        <input class="editPdp" type="button" value="Edit Password" />
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
</template>

<script>
export default {
  name: "ProfilHome",
};
</script>

<style scoped>
.logPic{
    height: 40px;
    margin-top: 5px;
    padding-right: 10px;
}

.ContainMainProfil{
    width: 50%;
    background-color: #FBFCFC;
    display: flex;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 50px;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   border-radius: 8px;
}
 
.PicProfile{

    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  
}

.pdpProfil{
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
    background-image: linear-gradient(to top left,
                                      rgba(0, 0, 0, .2),
                                      rgba(0, 0, 0, .2) 30%,
                                      rgba(0, 0, 0, 0));
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
                inset -2px -2px 3px rgba(0, 0, 0, .6);
}

.editPdp:hover {
    background-color: rgba(255, 0, 0, 1);
}

.editPdp:active {
    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
                inset 2px 2px 3px rgba(0, 0, 0, .6);
}

.named{
    font-size: 18px;
    font-weight: 900;
    margin-right: 40px;
    margin-top: 30px;
}

.NameUserProfil{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.mdpProfil{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.Password{
    font-size: 18px;
    font-weight: 900;
    margin-right: 40px;
    margin-top: 30px;
}

.deleted{
    font-size: 18px;
    font-weight: 900;
    margin-right: 40px;
}

.deleteProfil{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>