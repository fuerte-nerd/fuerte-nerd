import { blueGrey, yellow } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

export default createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: yellow,
    tonalOffset: 0.4,
  },
})
