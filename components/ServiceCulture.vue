<template>
  <div class="fon_service">
   <NuxtImg densities="x2" class="img_service" src="icon/fonx3.1.jpeg" alt="fon"></NuxtImg>
   <div class="text_service">
     <p class="text1_service">СЕРВИС</p>
     <p class="text2_service">ЭСТЕТИКА</p>
     <p class="text3_service">КАЧЕСТВО</p>
    </div>
  </div>
</template>
<style scoped>
  .fon_service{
    position: relative;
    margin: 50px  auto;
    padding: 0;
    overflow: hidden;
  }
.img_service{
  height: 750px;
  max-width: 1400px;
  object-fit: cover;
}
.text_service{
  font-size: 40px;
  color: antiquewhite;
}
.text1_service{
  position: absolute;
  top: 17%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.text2_service{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.text3_service{
  position: absolute;
  top: 84%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media screen and (max-width: 1024px) {
  .img_service{
    max-width: 1024px;
  }
}
@media screen and (max-width:500px) {
  .img_service{
    max-width: 500px;
  }
}
</style>