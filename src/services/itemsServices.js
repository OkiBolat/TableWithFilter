import { instance } from "./instance";


const itemsServices = {
  getItems : (pages) => instance(`?page=${pages}&limit=20&include=metadata`),
}


export default itemsServices;