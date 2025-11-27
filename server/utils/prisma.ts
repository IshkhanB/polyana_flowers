import { PrismaClient } from '@@/generated/prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma
// 5P4ynqxtbWVWi46
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma


// module.exports = {
//   apps: [{
//     name: 'app',
//     script: './.output/server/index.mjs',
//     time: true,
//     env: {
//       NODE_ENV: 'production',
//     }
//   }]
// }