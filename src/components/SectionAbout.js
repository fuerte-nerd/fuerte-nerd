import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
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
  const query = useStaticQuery(graphql`
    {
      dave1: file(name: { eq: "daveGrid1" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dave2: file(name: { eq: "daveGrid2" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dave3: file(name: { eq: "daveGrid3" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dave4: file(name: { eq: "daveGrid4" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dave5: file(name: { eq: "daveGrid5" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
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
          <Grid item style={{ overflow: "hidden" }}>
            <GridList
              cellHeight="40vh"
              cols={2}
              width="100%"
              style={{ height: "80vh", width: 500, overflow: "hidden" }}
            >
              <GridListTile>
                <Img fluid={query.dave2.childImageSharp.fluid} />
              </GridListTile>
              <GridListTile>
                <Img fluid={query.dave4.childImageSharp.fluid} />
              </GridListTile>
              <GridListTile cols={2}>
                <Img fluid={query.dave5.childImageSharp.fluid} />
              </GridListTile>
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

