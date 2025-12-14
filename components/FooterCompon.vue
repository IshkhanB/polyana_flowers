<template>
  <h1 class="name_footer">FLOWER MARKET</h1>
  <div class="footer_fon footer_grid">
    <div class="information">
      ИП ТЕРЗИЯН РУЗАННА СЕРГЕЕВНА 
      <br>
      ИНН: 231907166090
      <br>
      ОГРН/ОГРНИП: 323237500334679
      <br>
      Расчётный счёт: 40802810630060007630
      <br>
      Банк: ПАО Сбербанк
      <br>
      БИК банка: 046015602
      <br>
      Корр. счёт банка: 30101810600000000602
      <br>
      ИНН банка: 7707083893
      <br>
      КПП банка: 236643001
    </div>
    <div class="menu_footer">
      <h1> Меню</h1>
      <nav class="nav_footer">
        <a class="heder_a" href="/#catalog" >Каталог</a>
        <!-- <a href="/#catalog" @click.prevent="goToAnchor('/#catalog')">Каталог</a> -->
        <a href="/#delivery" @click.prevent="goToAnchor('/#delivery')">Доставка и оплата</a>
        <p >FAQ</p>
        <a href="/about_us" @click.prevent="goToAnchor('#about_us')">О нас</a>
        <a href="/reviews" @click.prevent="goToAnchor('#reviews')">Отзывы</a>
      </nav>
    </div>
    <div class="footer_contacts">
      <h1> Контакты</h1>
      <nav class="nav_footer">
        <p >+7(988)500-51-21</p>
        <br>
        <p >Адрес:</p>
        <br>
        <p >Краснодарский край, г.Сочи <br> с.Эстосадок, ул.Горная Карусель</p>
        <br>
        <a target="_blank" href="https://api.whatsapp.com/send/?phone=79885005121&text&type=phone_number&app_absent=0" >Написать в WhatsApp</a>
        <br>
        <a target="_blank" href="https://t.me/Flower_market_kp">Написать в Telegram</a>
      </nav>
    </div>
    <hr class="hr-media">
    <div class="footer_footer">
      <div class="nav_footer" >
        <a href="/privacy">Политика конфиденциальности</a>
        <p style="transform-origin: center center; line-height: 19px;">©️ Цветы Сочи 2024</p>
      </div>
      <div>
        <NuxtImg src="/icon/mir_visa.svg"/>
      </div>
      <div>
        <iframe src="https://yandex.ru/sprav/widget/rating-badge/237768002038?type=rating&theme=dark" width="150" height="50" frameborder="0"></iframe>
      </div>
      <div>
      <p>Rазработано Мной</p>
      <!-- <iframe src="https://yandex.ru/sprav/widget/rating-badge/237768002038?type=rating&theme=dark" width="150" height="50" frameborder="0"></iframe> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const goToAnchor = (hash:string)=>{
  location.hash=hash
}
</script>

<style scoped>
.footer_fon{
  grid-area: 1 / 1 / 2 / 2;
  margin: 30px auto;
  max-width: 1400px;
  /* height: 500px; */
  background-color: #fcfcfc;
  box-sizing: border-box;
}
.information{
  line-height: 30px;
  color:#d0d0d0;
}
.name_footer{
  background-image: url(public/icon/mdi_flower-tulip-out.svg);
  background-repeat: no-repeat;
  padding: 30px;
  background-size: 35px;
  background-position: left;
  padding-left: 35px;
}
.information>h1{
  font-size: 25px;
  color: #595959;
}
.menu_footer{
  grid-area: 1 / 2 / 2 / 3;
  margin: 0 auto;  
  width: 140px;
}
.menu_footer>h1{
  background-size: 35px;
  font-size: 25px;
  color: #595959;
}
.footer_contacts>h1{
  grid-area: 1 / 3 / 2 / 4;
  background-size: 35px;
  font-size: 25px;
  color: #595959;
}
.nav_footer{
  display: flex;
  flex-direction: column;
  line-height: 30px;
  
}
.footer_footer{
  grid-area: 3 / 1 / 4 / 4;
  margin: 0 auto;
  width: 1400px;
  display: flex;
  justify-content: space-around;
}
.footer_grid{
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr 40px 80px;
grid-column-gap: 0px;
grid-row-gap: 0px;
align-items: stretch;
justify-items: center;
}
hr {
  grid-area: 2 / 1 / 3 / 4;
  width: 80%;
  margin-top: 20px;
  border: 1px solid #c9c9c9;
  /* font-family: 'Cormorant', Arial, sans-serif; */
}
a:hover{
  border: #c9c9c9;
  background-color: #c9c9c9;
  border-radius: 0 20px 0 0 ;
  padding: 0 0 0 0px;
}
@media screen and (max-width: 1024px) {
}
@media screen and (max-width: 640px) {
  .footer_grid{
    grid-template-columns:1fr;
    grid-template-rows: 200px 200px 300px 200px;
    box-sizing: border-box;
  }
  .nav_footer{
    display: block;
  }
  .information{
    grid-area: 4 / 1 / 3 / 1;
  }
  .menu_footer{
    grid-area: 2 / 3 / 2 / 1;
  }
  .footer_contacts{
    grid-area: 1 / 1 / 1 / 1;
  }
  .footer_footer{
    display: none;
  }
  .hr-media{
    display: none;
  }
  .footer_fon{
    background-color: #f9f7f4 ;
  }
  
}

</style>