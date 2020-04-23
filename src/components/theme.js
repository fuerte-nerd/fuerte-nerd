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
    fontFamily: "Courier Prime",
    h1: {
      fontFamily: "Fanwood Text",
    },
    h2: {
      fontFamily: "Fanwood Text",
    },
    h3: {
      fontFamily: "Fanwood Text",
    },
    h4: {
      fontFamily: "Fanwood Text",
    },
    h5: {
      fontFamily: "Fanwood Text",
    },
    h6: {
      fontFamily: "Fanwood Text",
    },
  },
})
