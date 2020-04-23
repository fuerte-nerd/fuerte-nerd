import React from "react"
import { Fab } from "@material-ui/core"
import { ArrowUpward } from "@material-ui/icons"
import { Link } from "react-scroll"

const BackToTop = () => {
  return (
    <Link to="home" smooth={true}>
      <Fab
        color="primary"
        style={{ position: "fixed", bottom: "2.5rem", right: "2.5rem" }}
      >
        <ArrowUpward />
      </Fab>
    </Link>
  )
}

export default BackToTop
