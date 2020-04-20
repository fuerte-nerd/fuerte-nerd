import { SET_MENU } from "./types"

export const toggleMenu = menuState => ({
  type: SET_MENU,
  payload: menuState,
})
