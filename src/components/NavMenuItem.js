import React from "react"
import { connect } from "react-redux"
import { toggleMenu } from "../redux/actions"

const NavMenuItem = props => {
  return (
    <Link to={props.link} smooth={true} offset={props.offset ? 56 : 0}>
      <ListItem
        button
        alignItems="center"
        id={`${props.link}Link`}
        onClick={() => props.dispatch(toggleMenu(!props.isOpen))}
      >
        <ListItemText
          primaryTypographyProps={{ variant: "button", align: "center" }}
        >
          {props.label}
        </ListItemText>
      </ListItem>
    </Link>
  )
}

mapStateToProps = state => ({
  isOpen: state.navOpen,
})
export default connect(mapStateToProps)(NavMenuItem)
