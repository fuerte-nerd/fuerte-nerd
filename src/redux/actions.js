import {
  SET_MENU,
  SET_BACK_TO_TOP,
  SET_SMOOTH_SCROLLING,
  SET_CALL_MENU_ANCHOR,
  SET_TEXT_MENU_ANCHOR,
  SET_PHONE_MENU_ANCHOR,
  SET_WHATSAPP_MENU_ANCHOR,
  SET_PROJECT_MENU_ANCHOR,
  SET_BACK_TO_TOP_TIMER,
  SET_CONFIRM_DIALOG,
} from "./types"

export const toggleMenu = menuState => ({
  type: SET_MENU,
  payload: menuState,
})

export const setConfirmDialog = data => ({
  type: SET_CONFIRM_DIALOG,
  payload: data,
})

export const setCallMenuAnchor = element => ({
  type: SET_CALL_MENU_ANCHOR,
  payload: element,
})

export const setTextMenuAnchor = element => ({
  type: SET_TEXT_MENU_ANCHOR,
  payload: element,
})

export const setPhoneMenuAnchor = element => ({
  type: SET_PHONE_MENU_ANCHOR,
  payload: element,
})

export const setWhatsAppMenuAnchor = element => ({
  type: SET_WHATSAPP_MENU_ANCHOR,
  payload: element,
})

export const setProjectMenu = data => ({
  type: SET_PROJECT_MENU,
  payload: data,
})

export const toggleBackToTop = buttonState => ({
  type: SET_BACK_TO_TOP,
  payload: buttonState,
})

export const setBackToTopTimer = timerId => ({
  type: SET_BACK_TO_TOP_TIMER,
  payload: timerId,
})

export const setSmoothScroll = state => ({
  type: SET_SMOOTH_SCROLLING,
  payload: state,
})
