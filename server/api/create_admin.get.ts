import prisma from "@@/server/utils/prisma"

export default defineEventHandler(async (event)=>{
    try{
      await prisma.user.create({
        data: {
          email:'B2068666@gmail.com',
          pass:process.env.ADMIN_PASS
        }
      })
      
      return process.env.ADMIN_PASS
    }catch(e) {
      console.log(e)
      return 'error'
    }
})