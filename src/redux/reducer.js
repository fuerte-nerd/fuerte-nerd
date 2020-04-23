import { SET_MENU, SET_BACK_TO_TOP, SET_SMOOTH_SCROLLING } from "./types"

const initialState = {
  navOpen: false,
  backToTopVisible: false,
  isSmoothScrolling: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      return {
        ...state,
        navOpen: action.payload,
      }
    case SET_BACK_TO_TOP:
      return {
        ...state,
        backToTopVisible: action.payload,
      }
    case SET_SMOOTH_SCROLLING:
      return {
        ...state,
        isSmoothScrolling: action.payload,
      }
    default:
      return state
  }
}
