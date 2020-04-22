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
      todos: file(name: { eq: "apps_todos" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
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
        <Grid container>
          <Grid item>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Img fluid={imgsQuery.todos.childImageSharp.fluid} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5">Todos</Typography>
                  <Typography variant="body2">
                    A React application I built using Redux for state management
                    and Material UI for styling
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
        <Grid>
          <Grid>
            <Card>
              <CardActionArea>
                <CardMedia></CardMedia>
                <CardContent>
                  <Typography></Typography>
                  <Typography></Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button></Button>
                <Button></Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            <Card>
              <CardActionArea>
                <CardMedia></CardMedia>
                <CardContent>
                  <Typography></Typography>
                  <Typography></Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button></Button>
                <Button></Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            <Card>
              <CardActionArea>
                <CardMedia></CardMedia>
                <CardContent>
                  <Typography></Typography>
                  <Typography></Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button></Button>
                <Button></Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default SectionProjects
