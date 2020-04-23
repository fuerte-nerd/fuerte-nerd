import { red, blueGrey, yellow, amber } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

export default createMuiTheme({
  palette: {
    primary: red,
    secondary: amber,
  },
  typography: {
    fontFamily: "Source Serif Pro",
  },
})
