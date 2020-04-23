import React from "react"
import { connect } from "react-redux"
import { toggleMenu } from "../redux/actions"
import { ListItem, ListItemText } from "@material-ui/core"
import { Link } from "react-scroll"

const NavMenuItem = props => {
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
            style: { fontSize: "3rem" },
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
