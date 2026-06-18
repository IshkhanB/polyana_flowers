<template>
  <ProductsNew :product="product" :refresh="refresh">
    <NuxtLink class="card_add" :to="`/lk/edit/${product?.id}`"> Изменить</NuxtLink>
    <NuxtLink class="card_del" @click="deleteCardWithImages(product?.id)" > Удалить</NuxtLink>
    <button class="card_hit" :class="{ card_fold: product.publish === true }"  @click="changePublish(product)">{{product.publish?'Снять публикацию':'Опубликовать'}}</button>
  </ProductsNew>
</template>
<script setup lang="ts">
const props = defineProps(['product', 'refresh'])
const deleteCardWithImages = async (id:number)=>{
  await $fetch(`/api/product/${id}`, {
    method:'DELETE'
  })
  props.refresh()
}
const changePublish = async (product:any)=>{
  product.publish = !product.publish
  await $fetch(`/api/product/change_status/${product.id}`, {
    method:'PUT',
    body: {publish:product.publish}
  })
  props.refresh()
}
</script>
<style scoped>
.card_add {
  margin: 0 auto;
  padding: 10px;
  color: #ffffff;
  background-color: #595959;
  border-radius: 25px;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card_del {
  margin: 0 auto;
  width: 100px;
  padding: 10px;
  color: #ffffff;
  background-color: #f00303;
  border-radius: 25px;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card_hit{
  margin: 0 auto;
  width: 100px;
  padding: 10px;
  color: #ffffff;
  background-color: #0bd50b;
  border-radius: 25px;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card_add:hover {
  background-color: #e4b891;
  color: #fff;
} 
.card_info:hover {
  background-color: #e4b891;
  color: #fff;
}
  </style>