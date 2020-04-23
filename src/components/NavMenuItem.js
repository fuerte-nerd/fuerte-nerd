import React, { useEffect } from "react"
import { connect } from "react-redux"
import { toggleMenu, setSmoothScroll } from "../redux/actions"
import { ListItem, ListItemText } from "@material-ui/core"
import { Link, Events } from "react-scroll"

const NavMenuItem = props => {
  useEffect(() => {
    Events.scrollEvent.register("begin", () =>
      props.dispatch(setSmoothScroll(true))
    )
    Events.scrollEvent.register("end", () =>
      props.dispatch(setSmoothScroll(false))
    )
  }, [])

  return (
    <Link to={props.link} smooth={true} offset={props.offset ? -56 : 0}>
      <ListItem
        button
        alignItems="center"
        id={`${props.link}Link`}
        onClick={() => props.dispatch(toggleMenu(!props.isOpen))}
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
    </Link>
  )
}

const mapStateToProps = state => ({
  isOpen: state.navOpen,
})
export default connect(mapStateToProps)(NavMenuItem)
