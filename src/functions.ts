// createData.ts
import { PrismaClient } from "@prisma/client";
import readline from "readline";
import { NewStoreType } from "./types";

const prisma = new PrismaClient();


export async function addStore(storeDetails: NewStoreType) {
  try {
    const store = await prisma.store.create({
      data: {
        userId: storeDetails.userId,
        name: storeDetails.name,
        deliveryManager: storeDetails.deliveryManager,
      },
    });

    console.log("New Store Created:", store);
    return store;
  } catch (error) {
    console.log(error);
  }
}

export async function findStore(userId: string) {

  try {
    const store = await prisma.store.findMany({
      where: {
        userId: userId
      }
    });

    console.log("Store found: ", store)
    return store;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteStore(userId: string) {

  try {
    const store = await prisma.store.deleteMany({
      where: {
        userId: userId
      }
    });

    console.log("Store Deleted: ", userId)
    return store;
  } catch (error) {
    console.log(error);
  }
}

export async function findAllStores() {

  try {
    const stores = await prisma.store.findMany();

    console.log("All stores: ", stores)
    return stores;
  } catch (error) {
    console.log(error);
  }
}

