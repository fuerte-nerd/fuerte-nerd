import React, { useEffect } from "react"
import { connect } from "react-redux"
import { toggleMenu, setSmoothScroll } from "../redux/actions"
import { ListItem, ListItemText } from "@material-ui/core"
import { Link, Events, animateScroll } from "react-scroll"

const NavMenuItem = props => {
  useEffect(() => {
    Events.scrollEvent.register("begin", () =>
      props.dispatch(setSmoothScroll(true))
    )
    Events.scrollEvent.register("end", () =>
      props.dispatch(setSmoothScroll(false))
    )
  }, [])

  const handleClick = () => {
    animateScroll.scrollTo(props.link)
    props.dispatch(toggleMenu(!props.isOpen))
  }

  return (
    <ListItem
      button
      alignItems="center"
      id={`${props.link}Link`}
      onClick={handleClick}
    >
      <ListItemText
        primaryTypographyProps={{
          variant: "button",
          align: "center",
          style: { fontSize: "1rem" },
        }}
      >
        {props.label}
      </ListItemText>
    </ListItem>
  )
}

const mapStateToProps = state => ({
  isOpen: state.navOpen,
})
export default connect(mapStateToProps)(NavMenuItem)
