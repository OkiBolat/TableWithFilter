import { GET_ITEMS, ADD_FILTERED_OPTIONS } from "./actions";

const initialState = {
  items: [],
  filteredItems: [],
  filteredParams: {
    name: '',
    option: '',
    valueForFiltering: '',
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: [...state.items, ...action.payload],
        filteredItems: [...state.filteredItems, ...action.payload]
      }
    case ADD_FILTERED_OPTIONS:
      const payload = action.payload
      return {
        ...state, filteredParams: {
          ...state.filteredParams,
          name: payload.filteredItem,
          option: payload.filteredOption,
          valueForFiltering: payload.valueForFiltering,

        }
      }

    default:
      return state;
  }
}

export default reducer;
