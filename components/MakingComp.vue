<template>
  <form @submit.prevent class="forma_zapolneniya">
    <div class="name_input">
      <h2 style="margin: 10px;" >Оформление</h2>
      <label>
       <input type="checkbox" v-model="gost">
       Заберу сам!
      </label>
      <br>
      <label>
        <input v-model="order.customer_name" type="text" name="name"  placeholder="ФИО">
      </label>
      <label>
        <input v-model="order.phone" type="tel" name="tel" placeholder="Номер телефона">
      </label>
      <br> 
      <label>
        <input v-model="order.email" type="email" name="email" placeholder="Email">
      </label>
      <label>
        <input type="text" name="adres" placeholder="Адрес" v-model="order.address">
      </label>
      
      <div v-if="!gost">
        <hr style="width: 40vw; margin: 0 auto;">
        <label>
          <input v-model="order.recipient_name" type="text" name="name"  placeholder="ФИО получателя">
        </label>
        <label>
          <input v-model="order.recipient_phone" type="telefon" name="telefon" placeholder="Номер телефона получателя">
        </label>
      </div>
      <br> 
      <label>
        Открытка
        <input v-model="postcard" type="checkbox" >
      </label>
      <br>
      <label v-if="postcard">
        <textarea v-model="order.message" placeholder="Коментарий в открытку"></textarea>
      </label>
      <textarea v-model="order.comment" placeholder="Коментарий к заказу"></textarea>   
      <br>

      <fieldset>
        <legend>Способ оплаты</legend>
        <label>
          <input v-model="order.payment_type" type="radio" value="CASH" />
          Наличными
        </label>
        <label>
          <input v-model="order.payment_type" type="radio" value="ONLINE" />
          Онлайн
        </label>
      </fieldset>
      <br>
      <label >
        <input v-model="delivery" @change="checkTime" type="date" :min="minDeliveryDate" />
        <input v-model="time" @change="checkTime" type="time" :min="minDeliveryTime" />
      </label>

      <br>
      <div style="max-width: 400px; margin: 0 auto;">
        <CartinsIdes/>
      </div>
      <br>
      <ApprovalComp @approve="isChecked"/>
      <br>
      <button :disabled="!checked"  class="checkout_btn width_btn" @click="send" >Оформить заказ</button>
      
      <br>  
    </div>
  </form>
</template>
<script setup lang="ts">
import type { Order } from '~/generated/prisma'
const gost = ref(false)
const postcard = ref(false)
const checked = ref(false)
const cartStore=useCart()
const order = ref({} as Order)
const isChecked = (res:boolean)=>{
  checked.value = res
}
const minDeliveryDate = computed(() => {
  const now = new Date()
  now.setHours(now.getHours()+2)

  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
})

const delivery = ref(minDeliveryDate.value)

const minDeliveryTime = computed(() => {
  if (delivery.value==minDeliveryDate.value) {
    const now = new Date()
    now.setHours(now.getHours()+2)
  
    // Форматируем в 'YYYY-MM-DDTHH:mm' (без секунд!)
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
  
    return `${hours}:${minutes}`
    
  } else {
    return ''
  }
  
})


const checkTime = () =>{
  if (delivery.value==minDeliveryDate.value) {
    const now = new Date()
    now.setHours(now.getHours()+2)
  
    // Форматируем в 'YYYY-MM-DDTHH:mm' (без секунд!)
    const hours = now.getHours()
    const minutes = now.getMinutes()
    
    const [sH,sM] = time.value.split(':').map(el=>Number(el))
    if (sH<=hours) {
      time.value = `${String(hours).padStart(2, '0')}:${String(sM).padStart(2, '0')}`
      if (sM<minutes) {
        time.value = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
      }
    } 
    
  } 
}

const time = ref(minDeliveryTime.value)

const send = async ()=>{
  const items = cartStore.arr.map((el:any)=>({product_id:el.id, quantity:el.count,price:el.sale?el.sale:el.price}))
  order.value.total = cartStore.sum
  order.value.delivery_at = new Date(`${delivery.value}T${time.value}`)
  const data = {order: order.value, items}
  const resp = await $fetch(`/api/orders`,{
      method: 'POST',
      body: data,
  })
  cartStore.clear() // Удалил карзину
}
</script>
<style scoped>

.forma_zapolneniya{
  margin: 0 auto;
  width: 1400px;
  padding:10px ;
  /* width: 600px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
}
.name_input{
  text-align: center;
  width: 50vw;
  border-radius: 20px;
  /* border: 1px solid black; */
  background-color: rgb(253, 247, 240);
}
.name_input>label>input{
  margin: 10px ;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  border: 1px solid black;
}
.forma_zapolneniya input{
  margin: 10px ;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  border: 1px solid black;
}
.forma_zapolneniya textarea{
  margin: 10px ;
  padding: 10px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  border: 1px solid black;
}
.width_btn{
    width:300px ;
    margin-bottom: 20px;
}

</style>