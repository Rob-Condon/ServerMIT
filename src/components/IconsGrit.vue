<template>

  <div style="position: relative; transform: translateX(-17%); ">
    <img  src="../assets/images/ServicesTemplate2.png" alt="Ah shit lost it again">
    <img  src="../assets/images/ServicesTemplate2.png" alt="Ah shit lost it again">
    <div class="IconContent"  style="right: 310px; top:50px; position: absolute;">
      <img class="SVGimage" src="../assets/images/svg/ServerManagement2.svg" alt="Ah shit lost it again">
      <h1 class="ServiceText" style=" "> Server <br> Management </h1>

    </div>
    <div class="IconContent" style="right: 425px; top:400px; position: absolute">
      <img class="SVGimage" src="../assets/images/svg/networking.svg" alt="Ah shit lost it again">
      <h1 class="ServiceText" style=""> Networking </h1>

    </div>
    <div class="IconContent" style="right: 705px; top:50px; position: absolute">
      <img class="SVGimage" src="../assets/images/svg/security.svg" alt="Ah shit lost it again">
      <h1 class="ServiceText" style=""> Security </h1>

    </div>
    <div class="IconContent" style="right: 805px; top:400px; position: absolute">
      <img class="SVGimage" src="../assets/images/svg/disasterRecovery.svg" alt="Ah shit lost it again">
      <h1 class="ServiceText" style=""> Disaster <br> Recovery </h1>

    </div>
    <div class="IconContent"  style="right: 1110px; top:50px; position: absolute">
      <img class="SVGimage" src="../assets/images/svg/computerSystems.svg" alt="Ah shit lost it again">
      <h1 class="ServiceText" style=""> Computer <br> Systems </h1>

    </div>
    <div class="IconContent"  style="right: 1190px; top:400px; position: absolute">
      <img class="SVGimage" src="../assets/images/svg/cloudComputing.svg" alt="Ah shit lost it again">
      <h1 class="ServiceText" style=""> Cloud <br> computing </h1>

    </div>


  </div>

</template>

<script>
  export default {
    name: "IconsGrit"
  }
</script>

<style >
  :root {
    --aspectRatio: 130px

  }
  .SVGimage {
    margin-top: 40px;
    vertical-align: center;
    position: relative;
    height: var(--aspectRatio);
    width: calc(var(--aspectRatio)*1.23077);
  }
  h3 {
    font-size: 20px;
    color: dimgray;
  }
  h1 {
    font-family: 'Big Shoulders Text', cursive;
    font-weight: 600;
    color: white;
    font-size: 45px;
  }
  .ServiceText {
    position: relative;
    text-align: center;
    vertical-align: center;
    alignment: center
  }
  .IconContent {
    background-image: url("../assets/images/IconBorder.png");
    background-size: cover;
    height: 330px;
    width: 320px;
    text-shadow: 2px 2px #425014;
    transition: 1s;
  }
  .IconContent:hover {
    text-shadow: 8px 8px #425014;
  }
</style>
