import { blueGrey, yellow } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

export default createMuiTheme({
  palette: {
    primary: {
      ...blueGrey,
      contrastText: "#fff",
    },
    secondary: yellow,
    contrastThreshold: 0.1,
    tonalOffset: 0.1,
  },
  typography: {
    fontFamily: "Source Serif Pro",
  },
})
