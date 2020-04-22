import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  Box,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions,
  CardActionArea,
  Container,
  Grid,
  Typography,
  Button,
} from "@material-ui/core"
import { DirectionsRun } from "@material-ui/icons"
import { HeroImage } from "./image"

const SectionProjects = () => {
  const imgsQuery = useStaticQuery(graphql`
    {
      todos: file(name: { eq: "app_todos" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      notes: file(name: { eq: "app_notes" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      scoreboard: file(name: { eq: "app_scoreboard" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Box
      py={4}
      id="projects"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container>
        <Box>
          <Typography variant="h2">My Work</Typography>
          <Typography variant="subtitle1">
            Here you will find a selection of my work, ranging from SPAs (Single
            Page Applications) to websites (and more!)...
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Img fluid={imgsQuery.scoreboard.childImageSharp.fluid} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5">Scoreboard</Typography>
                  <Typography variant="body2">
                    A single page React application to help you keep score! I
                    built it using Redux for state management, LocalStorage for
                    data persistence and Material UI for styling.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button>Visit</Button>
                <Button>Code</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Img fluid={imgsQuery.todos.childImageSharp.fluid} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5">Todos</Typography>
                  <Typography variant="body2">
                    A single page React application for keeping track of your
                    tasks. I built it using Redux for state management,
                    LocalStorage for data persistence and Material UI for
                    styling.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button>Visit</Button>
                <Button>Code</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Img fluid={imgsQuery.notes.childImageSharp.fluid} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5">Notes</Typography>
                  <Typography variant="body2">
                    A single page React application for writing notes to
                    yourself! I built it using Redux for state management,
                    LocalStorage for data persistence and Material UI for
                    styling.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button>Visit</Button>
                <Button>Code</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default SectionProjects
