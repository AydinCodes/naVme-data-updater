// createData.ts
import { PrismaClient } from "@prisma/client";
import readline from "readline";

const prisma = new PrismaClient();

// export async function addUser(username: string, url: string) {

//   try {
//     const user = await prisma.user.create({
//       data: {
//         username,
//         url,
//       },
//     });

//     console.log("User: ", username, " created.");

//     return user;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getUserById(id: string) {
//   return await prisma.user.findFirst({
//     where: {
//       id: id,
//     },
//   });
// }


// export async function getUserByUsername(username: string) {
//   return await prisma.user.findFirst({
//     where: {
//       username: username,
//     },
//   });
// }

// export async function deleteAllUsers() {
//   await prisma.user.deleteMany();

//   console.log("All users deleted.");
// }

// export async function findAllUsers() {
//  const users =  await prisma.user.findMany();
// console.log("All users: ", users)
// return users
// }


// export const askPassword = () => {
//   return new Promise<string>((resolve) => {
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout
//     });

//     rl.question('Enter the password: ', (password) => {
//       rl.close();
//       resolve(password);
//     });
//   });
// }

export async function addStore() {

  try {
    const user = await prisma.store.create({
      data: {
        userId: "user_2UQTRLJGY1yadz7gyKy3ZxEtxqe",
        name: "provans",
        deliveryManager: "dms",
      },
    });

    console.log(user)
    return user;
  } catch (error) {
    console.log(error);
  }
}