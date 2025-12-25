<template>
  <SubstrateComponent>
    <AfterHeadr/>
    <PropuskComp/>
    <!-- <FilterMenu/> -->
    <ProductsComp :products="products"/>
    <!-- <AboutUs/> -->
    <ServiceCulture/>
    <!-- <DeliveryMap :delivery="deliveryStore.arr"/> -->
    <!-- <HowPay/> -->
    <!-- <CustomerReviews :reviews="reviewsStore.arr"/> -->
  </SubstrateComponent>
</template>

<script setup lang="ts">
import type { Product } from '~/generated/prisma'
const {data} = await useFetch<{products: Product[]}>(`/api/product`)
const products = data.value?.products as Product[]
const reviewsStore = useReviews()
const deliveryStore = useDelivery()
</script>