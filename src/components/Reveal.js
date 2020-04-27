import React from "react"
import { Fade } from "react-reveal"

const Reveal = ({ children }) => {
  return <Fade duration={600}>{children}</Fade>
}

export default Reveal
