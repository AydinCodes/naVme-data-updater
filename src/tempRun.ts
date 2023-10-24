import { addCustomer, deleteAllCustomers, deleteCustomer, findAllCustomers, findCustomer } from "./functions";
import { NewCustomerType } from "./types";


// const newCustomerDetails: NewCustomerType = {
//     userId: "testuserID",
//     storeName: "testname",
// };


(async () => {
// await addCustomer(newCustomerDetails)
// await findCustomer(newCustomerDetails.userId)
// await deleteCustomer(newCustomerDetails.userId)
await findAllCustomers()
// await deleteAllCustomers()
})();


