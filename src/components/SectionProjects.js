import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Container, Grid, Typography, Toolbar } from "@material-ui/core"
import Project from "./Project"

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
      py={2}
      id="projects"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="primary.dark"
      color="#fff"
    >
      <Toolbar />
      <Container>
        <Typography variant="h2">My Work</Typography>
        <Typography align="justify" color="inherit" variant="subtitle1">
          Here you will find a selection of my work, including SPAs (Single Page
          Applications), websites and more!
        </Typography>
        <Box mt={3}>
          <Grid container spacing={3}>
            <Project
              title="Scoreboard"
              img={imgsQuery.scoreboard.childImageSharp.fluid}
              description="A single page React application to help you keep score! I
                      built it using Redux for state management, LocalStorage
              for data persistence and Material UI for styling."
            />
            <Project
              title="Todos"
              img={imgsQuery.todos.childImageSharp.fluid}
              description="A single page React application for keeping track of your tasks. I
                      built it using Redux for state management, LocalStorage
              for data persistence and Material UI for styling."
            />
            <Project
              title="Notes"
              img={imgsQuery.notes.childImageSharp.fluid}
              description="A single page React application for writing notes to yourself! I
                      built it using Redux for state management, LocalStorage
              for data persistence and Material UI for styling."
            />
          </Grid>
        </Box>
      </Container>
      <Toolbar />
    </Box>
  )
}

export default SectionProjects
