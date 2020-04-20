import { SET_MENU } from "./types"

const initialState = {
  navOpen: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      return {
        ...state,
        navOpen: action.payload,
      }
    default:
      return state
  }
}
