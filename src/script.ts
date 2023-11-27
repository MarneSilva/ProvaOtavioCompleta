import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
import UserService from './services/UserServices'
async function main() {
    // const user2 = await prisma.user.create({
    //     data: {
    //         nome: "Caroline",
    //         email: "carolcarol@carol.com.uvv"
    //     }
    // })
    console.log(await UserService.listUsers)
}
// Mandar as queries para o banco de dados
main()
    // O que fazer depois da promessa retornar (as queries serem enviadas)
    .then(async () => {
    await prisma.$disconnect()
    })
    // Catch para demonstrar o erro no console
    .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})