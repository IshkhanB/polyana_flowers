<template>
    <ul class="content_cart">
      <li class="cart-item" v-for="el, i of cartStore.arr" :key="el.id">
        <!-- {{ el.title }} {{ el.count }} {{ el.count*el.price }}RUB <button class="but-back1" @click="cartStore.del">X</button> -->

        <div class="item-image">
          <NuxtImg preset="cover" v-if="el.img.length" :src=" 'img/'+el.img[0].img" :alt="el.title" class="product-image"/>
          <div v-else class="image-placeholder"></div>
        </div>
        <div class="item-details">
          <span class="item-title">{{ el.title }}</span>
          <span class="item-quantity">{{ el.count }} * {{el.sale ? el.sale : el.price }}</span>
        </div>
        <div class="item-total">{{ el.count * (el.sale ? el.sale : el.price) }}</div>
        <div class="item-count">
          <button class="count-but1" @click="el.count++"></button>
          <button class="count-but2" :style="el.count==1 ? 'filter:grayscale(1);' : ''"  @click="minus(el)"></button>
        </div>
        <button class="remove-btn" @click="cartStore.remove(i)">×</button>
      </li>
    </ul>
</template>
<script setup lang="ts">
const cartStore = useCart()
const minus = (el:any)=>{
  if (el.count>1) el.count--
}
</script>
<style scoped>

 
.but-back:hover{
  color: #010101;
}

.content_cart{
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 550px;
}
.cart-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #cdcdcd;
}
.cart-item:last-child {
  border-bottom: none;
}

.item-image {
  width: 60px;
  height: 60px;
  margin-right: 15px;
  flex-shrink: 0;
}
.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}
.image-placeholder {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  border-radius: 6px;
}
.item-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.item-title {
  font-weight: 500;
  margin-bottom: 5px;
}

.item-quantity {
  font-size: 14px;
  color: #666;
}
.item-quantity::after {
  margin: 0 auto;
  content: "₽";
  margin-left: 4px;
  position: relative;
}

.item-total {
  margin: 0 15px;
  font-weight: 600;
  white-space: nowrap;
}
.item-total::after {
  margin: 0 auto;
  content: "₽";
  margin-left: 4px;
  position: relative;
}

.remove-btn {
  display: block;
  background: none;
  border: none;
  color: #999;
  font-size: 18px;
  cursor: pointer;
  padding: 5px;
}

.remove-btn:hover {
  color: #ff5252;
}
.checkout-btn:hover {
  background: #3d8b40;
}
.item-count{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.count-but1{
  background-image: url(/public/icon/plus2.png);
  background-size: 12px; 
  width: 12px;
  height: 12px;
  /* background-color: #8b3d3d; */
  margin-bottom:10px ;
  padding: 2px;
  border-radius: 50%;

}
.count-but2{
  background-image: url(/public/icon/minus2.png);
  background-size: 12px; 
  width: 12px;
  height: 12px;
  /* background-color: #8b3d3d; */
  padding: 2px;
  border-radius: 50%;
}
</style>