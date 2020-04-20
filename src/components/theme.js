import { teal } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

export default createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: teal[200],
    },
    background: {
      default: teal[50],
    },
    text: {
      primary: teal[900],
    },
  },
})
