<template>
  <div class="approval_privacy">
    <label >
      <p>
        <input type="checkbox" @change="checked" >
        Я подтверждаю ознакомление и даю <NuxtLink class="link_style" to="/approval">Согласие на обработку моих персональных данных</NuxtLink> в порядке и на условиях, указанных в <NuxtLink class="link_style" to="/privacy">Политике обработки персональных данных</NuxtLink>
      </p>
      </label>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['approve'])
const checked = (e:Event) =>{
  const target = e.target as HTMLInputElement
  emit('approve', target?.checked)
}
</script>
<style scoped>
.approval_privacy{
  margin: 0 auto;
   width: 400px ;
}
.link_style{
color: rgb(13, 0, 251);
}
</style>