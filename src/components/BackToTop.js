import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setSmoothScroll } from "../redux/actions"
import { Fade, Fab, Tooltip } from "@material-ui/core"
import { ArrowUpward } from "@material-ui/icons"
import { Link, Events } from "react-scroll"

const BackToTop = props => {
  useEffect(() => {
    Events.scrollEvent.register("begin", () =>
      props.dispatch(setSmoothScroll(true))
    )
    Events.scrollEvent.register("end", () =>
      props.dispatch(setSmoothScroll(false))
    )
  }, [])
  const handleHover = () => {
    clearTimeout(props.backToTopTimer)
  }
  return (
    <Fade in={props.backToTopVisible}>
      <Link to="home" smooth={true} onMouseOver={handleHover}>
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
  backToTopTimer: state.backToTopTimer,
})

export default connect(mapStateToProps)(BackToTop)
