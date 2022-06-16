import { instance } from "./instance";


const itemsServices = {
  getItems : (pages) => instance(`?page=${pages}&limit=20`),
}


export default itemsServices;