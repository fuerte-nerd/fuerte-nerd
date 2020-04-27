import React from "react"
import { connect } from "react-redux"
import { setProjectMenu, setConfirmDialog } from "../redux/actions"
import {
  Box,
  Grid,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Divider,
} from "@material-ui/core"
import { Language, Code } from "@material-ui/icons"
import Img from "gatsby-image"
import { Fade } from "react-reveal"

const Project = props => {
  const handleClick = e => {
    const f = e.currentTarget
    switch (f.id) {
      case "action-area":
        return props.dispatch(
          setProjectMenu({
            anchor: f,
            viewLink: props.view,
            codeLink: props.code,
          })
        )
      case "visit":
        return props.dispatch(
          setConfirmDialog({
            title: `Visit ${props.title}?`,
            text: `Would you like to continue to ${props.title}?`,
            y: "Yes",
            n: "No",
            action: () => {
              window.open(props.view, "_blank")
              return props.dispatch(
                setConfirmDialog({
                  ...props.confirmDialog,
                  isOpen: false,
                })
              )
            },
            isOpen: true,
          })
        )

      case "code":
        return props.dispatch(
          setConfirmDialog({
            title: `View ${props.title} on GitHub?`,
            text: `Would you like to view the code for ${props.title} on GitHub?`,
            y: "Yes",
            n: "No",
            action: () => {
              window.open(props.code, "_blank")
              props.dispatch(
                setConfirmDialog({
                  ...props.confirmDialog,
                  isOpen: false,
                })
              )
              props.dispatch(setProjectMenu({ isOpen: false }))
            },
            isOpen: true,
          })
        )
      default:
        return
    }
  }
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Fade>
        <Card>
          <CardActionArea onClick={handleClick} id="action-area">
            <CardMedia>
              <Img fluid={props.img} />
            </CardMedia>
            <CardContent style={{ height: "10rem" }}>
              <Typography variant="h5">{props.title}</Typography>
              <Box my={1}>
                <Divider />
              </Box>
              <Typography variant="body2" align="justify">
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Divider />
          <CardActions>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<Language />}
              id="visit"
              onClick={handleClick}
            >
              Visit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<Code />}
              id="code"
              onClick={handleClick}
            >
              Code
            </Button>
          </CardActions>
        </Card>
      </Fade>
    </Grid>
  )
}

const mapStateToProps = state => ({
  confirmDialog: state.confirmDialog,
})

export default connect(mapStateToProps)(Project)
