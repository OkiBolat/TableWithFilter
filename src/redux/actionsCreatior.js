import itemsServices from "../services/itemsServices";
import { GET_ITEMS, ADD_FILTERED_OPTIONS } from "./actions"

export const getItems = (payload) => ({
  type: GET_ITEMS,
  payload
});

export const addFilteredOptions = (payload) => ({
  type: ADD_FILTERED_OPTIONS,
  payload
});

export const getItemThunk = (page) => {
  return (dispatch) => {
    itemsServices.getItems(page).then(({data}) => {
      dispatch(getItems(data))
    })
  }
}

