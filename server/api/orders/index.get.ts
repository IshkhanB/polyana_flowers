import prisma from "@@/server/utils/prisma"

export default defineEventHandler(async (event)=>{
  try{
    const orders = await prisma.order.findMany({
      include:{
        items: {
          select: {
            id: true,
            quantity: true,
            price: true,
            product:{
              select: {
                title: true,
                img: {
                  select: {
                    img:true
                  }
                }
              }
            },
          }
        },
      },
      orderBy: {
        id: 'desc'
      }
    })
    return{orders, ok: true}
  } catch(e) {
    return{orders:[], ok: false, e}
  }
})