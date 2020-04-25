import {
  SET_MENU,
  SET_BACK_TO_TOP,
  SET_SMOOTH_SCROLLING,
  SET_CALL_MENU_ANCHOR,
  SET_TEXT_MENU_ANCHOR,
} from "./types"

const initialState = {
  navOpen: false,
  backToTopVisible: false,
  isSmoothScrolling: false,
  callMenuAnchorEl: null,
  textMenuAnchorEl: null,
  backToTopTimer: 0,
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
    case SET_CALL_MENU_ANCHOR:
      return {
        ...state,
        callMenuAnchorEl: action.payload,
      }
    case SET_TEXT_MENU_ANCHOR:
      return {
        ...state,
        textMenuAnchorEl: action.payload,
      }
    default:
      return state
  }
}
