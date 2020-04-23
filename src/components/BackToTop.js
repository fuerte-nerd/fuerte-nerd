import React from "react"
import { Fab } from "@material-ui/core"
import { Home } from "@material-ui/icons"

const BackToTop = () => {
  return (
    <Fab style={{ position: "fixed", bottom: "2.5rem", right: "2.5rem" }}>
      <Home />
    </Fab>
  )
}

export default BackToTop
