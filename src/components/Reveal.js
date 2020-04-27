import React from "react"
import { Fade } from "react-reveal"

const Reveal = ({ children }) => {
  return <Fade duration={100}>{children}</Fade>
}

export default Reveal
