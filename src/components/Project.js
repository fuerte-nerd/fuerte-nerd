import React from "react"
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Divider,
} from "@material-ui/core"
import { Language, Code } from "@material-ui/icons"
import Img from "gatsby-image"

const Project = props => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea>
          <CardMedia>
            <Img fluid={props.img} />
          </CardMedia>
          <CardContent style={{ height: "10rem" }}>
            <Typography variant="h5">{props.title}</Typography>
            <Typography variant="body2">{props.description}</Typography>
          </CardContent>
        </CardActionArea>
        <Divider />
        <CardActions>
          <Button startIcon={<Language />}>Visit</Button>
          <Button startIcon={<Code />}>Code</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Project
