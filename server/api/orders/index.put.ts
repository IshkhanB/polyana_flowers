import prisma from "@@/server/utils/prisma"

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event)
    const id = data.id
    delete data.id
    await prisma.order.update({
      data:{
        ...data,
      },
      where: {id}
    })
    return true
  } catch (e) {
    console.log(e)
    return false
  }
})