import { blueGrey, pink } from "@material-ui/core/colors"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

let theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: pink,
  },
  typography: {
    fontFamily: "Crimson Text",
    htmlFontSize: 16,
  },
})

theme = responsiveFontSizes(theme)

export default theme
