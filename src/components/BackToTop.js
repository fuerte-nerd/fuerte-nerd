import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setSmoothScroll, toggleBackToTop } from "../redux/actions"
import { Fade, Fab } from "@material-ui/core"
import { ArrowUpward } from "@material-ui/icons"
import { Link, Events } from "react-scroll"

const BackToTop = props => {
  useEffect(() => {
    Events.scrollEvent.register("begin", () => {
      props.dispatch(setSmoothScroll(true))
    })
    Events.scrollEvent.register("end", () => {
      props.dispatch(toggleBackToTop(false))
      props.dispatch(setSmoothScroll(false))
    })
    // eslint-disable-next-line
  }, [])
  const handleMouseEnter = () => {
    clearTimeout(props.backToTopTimer)
  }
  const handleMouseLeave = () => {
    props.dispatch(toggleBackToTop(false))
  }
  return (
    <Fade in={props.backToTopVisible}>
      <Link
        to="home"
        smooth={true}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
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
  backToTopTimer: state.backToTopTimer,
})

export default connect(mapStateToProps)(BackToTop)
