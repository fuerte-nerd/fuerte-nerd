import { SET_MENU, SET_BACK_TO_TOP } from "./types"

export const toggleMenu = menuState => ({
  type: SET_MENU,
  payload: menuState,
})

export const toggleBackToTop = buttonState => ({
  type: SET_BACK_TO_TOP,
  payload: buttonState,
})
