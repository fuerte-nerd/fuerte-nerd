import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Container, Grid, Typography, Toolbar } from "@material-ui/core"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import Project from "./Project"
import ProjectMenu from "./ProjectMenu"

const SectionProjects = () => {
  const data = useStaticQuery(graphql`
    {
      images: allFile(
        filter: {
          sourceInstanceName: { eq: "projects" }
          name: { eq: "image" }
        }
      ) {
        edges {
          node {
            relativeDirectory
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      projects: allFile(
        filter: {
          sourceInstanceName: { eq: "projects" }
          name: { eq: "project" }
        }
      ) {
        edges {
          node {
            relativeDirectory
            childMarkdownRemark {
              frontmatter {
                code_url
                created(formatString: "MMMM YYYY")
                name
                view_url
              }
              rawMarkdownBody
            }
          }
        }
      }
    }
  `)

  const projects = data.projects.edges.map(i => {
    return {
      ...i.node.childMarkdownRemark.frontmatter,
      description: i.node.childMarkdownRemark.rawMarkdownBody,
      image: data.images.edges.reduce((acc, cv) => {
        if (i.node.relativeDirectory === cv.node.relativeDirectory) {
          return cv
        }
        return acc
      }),
    }
  })

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
      boxShadow={1}
    >
      <Toolbar />
      <Container>
        <Reveal>
          <SectionHeading
            title="Projects"
            subtitle="The fruits of my labour!"
          />
        </Reveal>
        <Reveal>
          <Typography align="justify" color="inherit" variant="subtitle1">
            Here you will find a selection of my work, including SPAs (Single
            Page Applications), websites and more!
          </Typography>
        </Reveal>
        <Box mt={3}>
          <Grid container spacing={3}>
            {projects.map((i, ind) => {
              return (
                <Project
                  key={ind}
                  title={i.name}
                  view={i.view_url}
                  code={i.code_url}
                  img={i.image.node.childImageSharp.fluid}
                  description={i.description}
                />
              )
            })}
          </Grid>
        </Box>
      </Container>
      <Toolbar />
      <ProjectMenu />
    </Box>
  )
}

export default SectionProjects
