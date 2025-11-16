import prisma from "@@/server/utils/prisma"

export default defineEventHandler(async (event)=>{
  const id = event.context.params?.id
  let data = await readBody(event)
  
  if(id){
    try{
    const product = await prisma.product.update({
      data:{
        ...data,
      },
      where: {
        id: +id
      }
    })
    return{product, ok: true}
  }catch(e) {
    console.log(e)
    return{product:null, ok: false, e}  
  }
  }
  return{product:null, ok: false,}
})