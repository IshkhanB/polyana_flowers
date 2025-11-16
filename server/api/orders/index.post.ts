import prisma from "@@/server/utils/prisma"

export default defineEventHandler(async (event) => {
  try {
    const dataAll = await readBody(event)
    const order = await prisma.order.create({
      data: dataAll.order
    })
    const items = dataAll.items.map((el:any)=>({order_id:order.id,...el}))
    await prisma.orderItem.createMany({
      data: items
    })
    return true
  } catch (e) {
    console.log(e)
    return false
  }
})