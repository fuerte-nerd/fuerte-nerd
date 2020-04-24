import {
  SET_MENU,
  SET_BACK_TO_TOP,
  SET_SMOOTH_SCROLLING,
  SET_CALL_MENU_ANCHOR,
  SET_TEXT_MENU_ANCHOR,
} from "./types"

export const toggleMenu = menuState => ({
  type: SET_MENU,
  payload: menuState,
})

export const setCallMenuAnchor = element => ({
  type: SET_CALL_MENU_ANCHOR,
  payload: element,
})

export const setTextMenuAnchor = element => ({
  type: SET_TEXT_MENU_ANCHOR,
  payload: element,
})

export const toggleBackToTop = buttonState => ({
  type: SET_BACK_TO_TOP,
  payload: buttonState,
})

export const setSmoothScroll = state => ({
  type: SET_SMOOTH_SCROLLING,
  payload: state,
})
