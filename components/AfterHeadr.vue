<template>
  <div class="fon_div">
      <NuxtImg class="img_fon_after" src="icon/Group_975_1.png" alt="Fon" />
      <NuxtImg class="img_girl" src="icon/front_about_us.png" alt="girl-flowers" />
    <div class="fon_div_text">
    <p>FLOWER MARKET<br> больше, чем просто цветы </p>
    </div>
    <!-- <div class="sign-wrap-2 fon_div_text">
    <span class="sign_word">Неоновый текст</span>
</div> -->
  </div>
</template>

<style>
.fon_div{
  position: relative;
  margin: 0 auto;
  padding: 0;
  max-width: 1400px ;
  height: 500px;
  overflow: hidden;
  border-radius: 25px;
}
.fon_div_text{
  margin: 0 auto;
  text-align: center;
}
.fon_div_text>p{
  position: absolute;
  bottom: 25%;
  left: 5%;
  font-size: 40px;
  max-width: 500px;
  font-family: 'Cormorant', Arial, sans-serif;
  letter-spacing: -1px;
  text-transform: uppercase;
  line-height: 63px;
  color: #e9be98;
  backdrop-filter: brightness(0.5);
  align-content: center
}

.img_fon_after{
  position: absolute;
  bottom: 0;
  left: 0;
  height: 400px;
  margin: 0 auto;
  width: 100%;
  min-width: 500px;
  object-fit: cover;
}
.img_girl{
  width: 600px;
  overflow: hidden;
  object-fit: cover;
  position: absolute;
  top: 0px;
  right: 0px;
  overflow-y: visible;
}

@media screen and (max-width: 1024px) {
  .img_girl{
    top: 40px;
    right: 40px;
  }
}
@media screen and (max-width: 800px) {
  .img_girl {
    top: 70px;
    right: 80px;
  }
}
@media screen and (max-width:500px) {
  .fon_div{
    max-width: 500px ;
    height: 400px;
  }
  .fon_div_text{
    margin: 0 auto;
    text-align: center;
  }
  .img_fon_after{
    bottom:-45px;
    left: 0px;
  }
  .img_girl{
    top: 0px;
    right: 0px;
  }
  .fon_div_text>p{
    top: 20%;
    left: 5%;
    width: 90%;
  
  }
  /* .sign-wrap-2 {
    background: #337AB7;
    text-align: center;
    padding: 60px 20px;
} */
/* .sign-wrap-2 .sign_word {
    font-size: 40px;
    font-weight: bold;
    line-height: 50px;
    color: #2a2929;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    animation: 2s neon-2 alternate-reverse infinite;
} */
/* @keyframes neon-2 {
    from {
        text-shadow: 0 0 5px #FFF,
        0 0 10px #FFF,
        0 0 15px #FFF,
        0 0 20px #fff;
    }
    to {
        text-shadow: 0 0 20px #fff,
        0 0 35px #fff,
        0 0 40px #fff,
        0 0 50px #fff,
        0 0 800px #fff;
    }
} */
}
</style>