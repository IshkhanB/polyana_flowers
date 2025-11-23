import prisma from "@@/server/utils/prisma"

export default defineEventHandler(async (event)=>{
  try {
    await prisma.type.createMany({
      data: [{
        id:1,
        title: 'flowers'
      }, {
        id:2,
        title: 'gifts'
      }]
    })
    return {ok:true}
  } catch (e) {
    console.log(e)
    return 'error'
  }
})