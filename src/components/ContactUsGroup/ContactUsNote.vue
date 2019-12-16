<template>
  <div style="height: 33vw; overflow: hidden; max-height: 100%; max-width: 100%; background-color: #dadbe0;">
    <img id="Background" style="" src="../../assets/images/ContactUsPostItNote.png" alt="Ah shit lost it again">
    <img id="Background1" style="" src="../../assets/images/ContactUsPostItNotePink.png" alt="Ah shit lost it again">
    <img id="Keyboard"  src="../../assets/images/ContactUsKeyboard.png" alt="Ah shit lost it again">
    <div style=" overflow: hidden; max-width: 100%; height: 33vw; display: inline-block; transform: translateX(-71%)">
      <div style="transform: translateY(100%)">
        <h1 class="PageTitleTwo"> Remote Desktop </h1>
        <h3 class="SemiTitle1"> Download remote desktop for</h3>
        <h3 class="SemiTitle1"> instant support. </h3>
        <h3> DownLoad Button </h3>
      </div>

    </div>
    <div style=" overflow: hidden; max-width: 100%; height: 33vw; display: inline-block;  transform: translateX(-39%)">
      <div style="transform: translateY(60%)">
        <h1 class="PageTitleOne"> IT Support </h1>
        <h3 class="SemiTitle"> Professional IT services made for you locally </h3>
        <h3 class="SemiTitle"> By a close-knit company in CHCH </h3>
      </div>

    </div>


  </div>
</template>

<script>
    export default {
        name: "ContactUsNote"
    }
</script>

<style scoped>
  #Background {
    position: absolute;  overflow: hidden; max-height: 100%; max-width: 100%;
    left: 28%;
    height: 35vw;
    width: 45%;
  }

  #Background1 {
    position: absolute;  overflow: hidden; max-height: 100%; max-width: 100%;
    left: 3%;
    transform: translateY(20%);
    height: 25vw;
    width: 30%;
  }
  #Keyboard {
    position: absolute;
    overflow-x: hidden; max-width: 100%;
    right: 0;
    height: 55%;
    width: 35%;
    transform: translateY(70%);
  }
  .PageTitleOne {
    padding-left: 40px;
    display: inline-block;
    font-family: 'Bebas Neue', cursive;
    font-weight: 400;
    font-size:  6.5vw;
    color: #6f6476;
    position: relative;
    z-index: 2;
    opacity: 100%
  }

  .PageTitleTwo {
    padding-left: 40px;
    display: inline-block;
    font-family: 'Bebas Neue', cursive;
    font-weight: 400;
    font-size:  4.0vw;
    color: #6f6476;
    position: relative;
    z-index: 2;
    opacity: 100%
  }

  .SemiTitle {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.40vw;
    color: #6f6476;
    opacity: 80%;

  }

  .SemiTitle1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.4vw;
    color: #6f6476;
    opacity: 80%;
    transform: translateX(5px);
  }


</style>
