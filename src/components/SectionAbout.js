import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  Divider,
  Toolbar,
  Hidden,
  Box,
  Container,
  Grid,
  GridList,
  GridListTile,
  Typography,
  Button,
} from "@material-ui/core"
import { GitHub, Instagram } from "@material-ui/icons"

const SectionAbout = props => {
  const query = useStaticQuery(graphql`
    {
      dave2: file(name: { eq: "daveGrid2" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300, cropFocus: ATTENTION) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dave4: file(name: { eq: "daveGrid4" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dave5: file(name: { eq: "daveGrid5" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300, cropFocus: ATTENTION) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Box
      id="about"
      py={2}
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="secondary.main"
      flexDirection="column"
    >
      <Hidden smUp>
        <Toolbar />
      </Hidden>
      <Container>
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <Box>
              <Box pb={3}>
                <Typography variant="h2">Who am I?</Typography>
              </Box>
              <Typography variant="body1" paragraph>
                I am an app developer originally from England, now residing in
                the Canary Islands. I mainly work with React, Gatsby, vanilla
                JavaScript and Node, but I have experience of working with
                numerous tech such as Django, Laravel, Material UI, Bootstrap,
                PHP, Python (too many to mention them all without sending you to
                sleep!)
              </Typography>
              <Typography variant="body2" paragraph>
                When I am not working, I enjoy volunteering at the local dog
                rescue center, playing the piano and mountain-biking around this
                beautiful island....although not necessarily at the same time!
                :o)
              </Typography>
              <Divider />{" "}
              <Box mt={2}>
                <Typography variant="subtitle2">
                  If you want to have a sniff of my code....
                </Typography>

                <Button variant="outlined" startIcon={<GitHub />}>
                  Check out my GitHub
                </Button>
              </Box>
              <Box pt={2}>
                <Typography variant="subtitle2">
                  If you like pics of dogs....
                </Typography>
                <Button variant="outlined" startIcon={<Instagram />}>
                  Check out my Instagram
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={{ overflow: "hidden" }}>
            <GridList
              cellHeight="auto"
              cols={2}
              style={{
                width: "100%",
                maxWidth: 500,
                overflow: "hidden",
              }}
            >
              <GridListTile>
                <Img fluid={query.dave5.childImageSharp.fluid} />
              </GridListTile>
              <GridListTile>
                <Img fluid={query.dave2.childImageSharp.fluid} />
              </GridListTile>
              <GridListTile cols={2}>
                <Img fluid={query.dave4.childImageSharp.fluid} />
              </GridListTile>
            </GridList>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default SectionAbout
