import { addStore, deleteStore, findAllStores, findStore } from "./functions";
import { NewStoreType } from "./types";


const newStoreDetails: NewStoreType = {
    userId: "testuserID",
    name: "testname",
    deliveryManager: "testmanager"
};


(async () => {
// await addStore(newStoreDetails)
// await findStore(newStoreDetails.userId)
// await deleteStore(newStoreDetails.userId)
await findAllStores()
})();


