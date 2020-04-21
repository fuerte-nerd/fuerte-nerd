import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import {
  Box,
  Container,
  Grid,
  GridList,
  GridListTile,
  Typography,
  Button,
} from "@material-ui/core"
import { DirectionsRun } from "@material-ui/icons"

const SectionAbout = props => {
  console.log(props)

  useEffect(() => console.log(props), [props])
  return (
    <Box
      id="about"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="secondary.main"
    >
      <Container>
        <Grid container>
          <Grid item>
            <GridList>
              <GridListTile></GridListTile>
              <GridListTile></GridListTile>
              <GridListTile></GridListTile>
              <GridListTile></GridListTile>
              <GridListTile></GridListTile>
            </GridList>
          </Grid>
          <Grid item>This is the writing part</Grid>
        </Grid>
        About
      </Container>
    </Box>
  )
}

export default SectionAbout

export const query = graphql`
  {
    dave1: file(name: { eq: "daveGrid1" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dave2: file(name: { eq: "daveGrid2" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dave3: file(name: { eq: "daveGrid3" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dave4: file(name: { eq: "daveGrid4" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dave5: file(name: { eq: "daveGrid5" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
