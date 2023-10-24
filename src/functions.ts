// createData.ts
import { PrismaClient } from "@prisma/client";
import { NewCustomerType } from "./types";

const prisma = new PrismaClient();
// npx prisma migrate reset - Deletes whole db

export async function addCustomer(customerDetails: NewCustomerType) {
  try {
    const customer = await prisma.customer.create({
      data: {
        userId: customerDetails.userId,
        name: customerDetails.name,
      },
    });

    console.log("New Customer Created:", customer);
    return customer;
  } catch (error) {
    console.log(error);
  }
}

export async function findCustomer(userId: string) {

  try {
    const customer = await prisma.customer.findMany({
      where: {
        userId: userId
      }
    });

    console.log("Customer found: ", customer)
    return customer;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCustomer(userId: string) {

  try {
    const customer = await prisma.customer.deleteMany({
      where: {
        userId: userId
      }
    });

    console.log("Customer Deleted: ", userId)
    return customer;
  } catch (error) {
    console.log(error);
  }
}

export async function findAllCustomers() {

  try {
    const customers = await prisma.customer.findMany();
const allOriginDetails = await prisma.originDetails.findMany();

customers.map((customer) => {
  const customerOriginDetails = allOriginDetails.find(
    (originDetails) => originDetails.customerId === customer.id
  );

const customerDetails = {
  ...customer,
  originDetails: customerOriginDetails,
}

console.log(customerDetails)
  return customerDetails;
});


  } catch (error) {
    console.log(error);
  }
}

export async function deleteAllCustomers() {

  try {
    const originDetails = await prisma.originDetails.deleteMany();
    const customers = await prisma.customer.deleteMany();
    console.log("All customers: ", customers)
    console.log("All origin details", originDetails)
    return customers;
  } catch (error) {
    console.log(error);
  }
}

