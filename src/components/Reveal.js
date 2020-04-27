import React from "react"
import { Fade } from "react-reveal"

const Reveal = ({ children }) => {
  return <Fade duration={10000}>{children}</Fade>
}

export default Reveal
