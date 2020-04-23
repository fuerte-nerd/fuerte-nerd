import React from "react"
import { Fade, Fab } from "@material-ui/core"
import { ArrowUpward } from "@material-ui/icons"
import { Link } from "react-scroll"

const BackToTop = () => {
  return (
    <Fade in>
      <Link to="home" smooth={true}>
        <Fab
          color="primary"
          size="small"
          style={{ position: "fixed", bottom: "1rem", right: "1rem" }}
        >
          <ArrowUpward />
        </Fab>
      </Link>
    </Fade>
  )
}

export default BackToTop
