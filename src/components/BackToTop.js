import React from "react"
import { connect } from "react-redux"
import { Fade, Fab } from "@material-ui/core"
import { ArrowUpward } from "@material-ui/icons"
import { Link } from "react-scroll"

const BackToTop = props => {
  return (
    <Fade in={props.backToTopVisible}>
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

const mapStateToProps = state => ({
  backToTopVisible: state.backToTopVisible,
})

export default connect(mapStateToProps)(BackToTop)
