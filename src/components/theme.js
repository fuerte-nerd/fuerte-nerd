import { blueGrey, pink } from "@material-ui/core/colors"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

let theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: pink,
  },
  typography: {
    fontFamily: "Crimson Text",
    fontSize: 14,
  },
})

theme = responsiveFontSizes(theme)

export default theme
