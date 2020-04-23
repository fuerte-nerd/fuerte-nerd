import React from "react"
import { connect } from "react-redux"
import { Fade, Fab, Tooltip } from "@material-ui/core"
import { ArrowUpward } from "@material-ui/icons"
import { Link } from "react-scroll"

const BackToTop = props => {
  return (
    <Fade in={props.backToTopVisible}>
      <Link to="home" smooth={true}>
        <Tooltip title="Back to top" placement="left">
          <Fab
            color="primary"
            size="small"
            style={{ position: "fixed", bottom: "1rem", right: "1rem" }}
          >
            <ArrowUpward />
          </Fab>
        </Tooltip>
      </Link>
    </Fade>
  )
}

const mapStateToProps = state => ({
  backToTopVisible: state.backToTopVisible,
})

export default connect(mapStateToProps)(BackToTop)
