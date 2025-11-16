<template >
  <div>
    <HeaderComp/>
    <div>
        <LkMenu/>
      <div>
        <table class="tablica">
          <thead>
            <tr>
              <th>ID</th>
              <th>Дата оформления</th>
              <th>Имя заказчика</th>
              <th>Номер заказчика</th>
              <th>Имя получателя</th>
              <th>номер получателя</th>
              <th>Адрес</th>
              <th>Дата получения </th>
              <th>Сумма</th>
              <th>Способ оплаты</th>
              <th>Статус заказа</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="order in ordersData?.orders">
              <tr>
                <td>{{ order.id }}</td>
                <td>{{ new Date(order.created_at).toLocaleString() }}</td>
                <td>{{ order.customer_name }}</td>
                <td>{{ order.phone }}</td>
                <td>{{ order.recipient_name }}</td>
                <td>{{ order.recipient_phone }}</td>
                <td>{{ order.address }}</td>
                <td>{{ new Date(order.delivery_at).toLocaleString() }}</td>
                <td>{{ order.total }}</td>
                <td>{{ order.payment_type }}</td>
                <td>
                  <select name="status" v-model="order.status" @change="update(order.id, order.status)">
                    <option value="NEW">создан</option>
                    <option value="PAID">оплачен</option>
                    <option value="DELIVERED">доставлен</option>
                    <option value="CANCELLED">отменён</option>
                  </select>
                </td>
                <!-- <td>
                  <select name="payment_type" v-model="order.payment_type" @change="update(order.id, order.payment_type)">
                    <option value="ONLINE">создан</option>
                    <option value="CASH"></option>
                  </select>
                </td> -->
                <td>
                  <button @click="activeId = activeId==order.id ? null : order.id">Товары</button>
                </td>
              </tr>
              <tr v-if="activeId==order.id">
                <td colspan="10">
                  <div>
                    <p>Email:{{ order.email }}</p>
                  </div>
                  <div style="display: flex;">
                    <div class="cart-item" v-for="el of order.items" :key="el.id">
                      <div class="item-image">
                        <NuxtImg preset="cover" v-if="el.product.img.length" :src=" 'img/'+el.product.img[0].img" :alt="el.product.title" class="product-image"/>
                        <div v-else class="image-placeholder"></div>
                      </div>
                      <div class="item-details">
                        <span class="item-title">{{ el.product.title }}</span>
                        <span class="item-quantity">{{ el.quantity }} * {{el.price }}</span>
                      </div>
                    </div>
                  </div>
                  <div style="display: flex;">

                    <label>
                      Коментарий
                      <p>{{order.comment}}</p>
                    </label>
                    <label>
                      Коментарий в открытку 
                      <p>{{order.message}}</p>
                    </label>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import Products from '~/components/ProductsEdit.vue'
// import { useUsers } from '~/stores/user'
const userStore = useUsers()
const activeId= ref(null as null|number)
// const {data, refresh} = await useFetch(`/api/product/lk`)
const {data:ordersData} = await useFetch('/api/orders')
const update = async (id:number, status:string) => {
  await $fetch(`/api/orders`, {
    method:'PUT',
    body: {id, status}
  })
}
definePageMeta({
  layout: 'admin'
})
onMounted( async ()=>{
  await userStore.autoLogin()
  if (!userStore.user) {
    navigateTo('/')
  }
})
</script>
<style scoped>

#type_id_select{
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px ;
}
.forma_zapolneniya{
  margin: 0 auto;
  padding:10px ;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
input,textarea {
  display: block;
  margin-top: 5px;
  padding: 8px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
 .swip{
   margin: 0 auto;
   display: flex;
   align-items: center;
  }
  swiper-slide>img {
    object-position: center;
    border-radius: 20px;
  }
  .swip_div{
    margin: 0 auto;
    width: 327px;
  }
  .preview-container {
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.preview-item {
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.remove-button {
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(255, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.remove-button:hover {
  background: rgba(255, 0, 0, 1);
}

.tablica{
  margin: 20px auto;
  padding: 3px;
}
.tablica th{
  margin: 0 auto;
  padding: 3px;
}
.tablica td{
  margin: 0 auto;
  padding: 3px;
}
</style>

