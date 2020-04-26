import {
  SET_MENU,
  SET_BACK_TO_TOP,
  SET_SMOOTH_SCROLLING,
  SET_CALL_MENU_ANCHOR,
  SET_TEXT_MENU_ANCHOR,
  SET_PHONE_MENU_ANCHOR,
  SET_PROJECT_MENU,
  SET_WHATSAPP_MENU_ANCHOR,
  SET_BACK_TO_TOP_TIMER,
  SET_CONFIRM_DIALOG,
} from "./types"

const initialState = {
  navOpen: false,
  backToTopVisible: false,
  isSmoothScrolling: false,
  callMenuAnchorEl: null,
  textMenuAnchorEl: null,
  phoneMenuAnchorEl: null,
  whatsAppMenuAnchorEl: null,
  projectMenu: {
    anchor: null,
    viewLink: "",
    codeLink: "",
  },
  projectMenuAnchorEl: null,
  backToTopTimer: 0,
  confirmDialog: {
    title: "",
    text: "",
    y: "",
    n: "",
    action: null,
    isOpen: false,
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      return {
        ...state,
        navOpen: action.payload,
      }
    case SET_CONFIRM_DIALOG:
      return {
        ...state,
        confirmDialog: action.payload,
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
    case SET_PHONE_MENU_ANCHOR:
      return {
        ...state,
        phoneMenuAnchorEl: action.payload,
      }
    case SET_WHATSAPP_MENU_ANCHOR:
      return {
        ...state,
        whatsAppMenuAnchorEl: action.payload,
      }
    case SET_PROJECT_MENU:
      return {
        ...state,
        projectMenu: action.payload,
      }
    case SET_BACK_TO_TOP_TIMER:
      return {
        ...state,
        backToTopTimer: action.payload,
      }
    default:
      return state
  }
}
