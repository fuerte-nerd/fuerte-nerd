import React, { useEffect } from "react"
import { connect } from "react-redux"
import { toggleMenu, setSmoothScroll } from "../redux/actions"
import { ListItem, ListItemText } from "@material-ui/core"
import { Events, scroller } from "react-scroll"

const NavMenuItem = props => {
  useEffect(() => {
    Events.scrollEvent.register("begin", () =>
      props.dispatch(setSmoothScroll(true))
    )
    Events.scrollEvent.register("end", () =>
      props.dispatch(setSmoothScroll(false))
    )
    // eslint-disable-next-line
  }, [])

  const handleClick = () => {
    scroller.scrollTo(props.link, { smooth: true })
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
