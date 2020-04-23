import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  Divider,
  Box,
  Container,
  Grid,
  GridList,
  GridListTile,
  Typography,
  Button,
  Toolbar,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { GitHub, Instagram } from "@material-ui/icons"
const useStyles = makeStyles(theme => ({
  aboutText: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "justify",
    },
  },
  externalLinks: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}))

const SectionAbout = props => {
  const classes = useStyles()
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
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="primary.light"
      flexDirection="column"
      elevation={3}
    >
      <Toolbar />
      <Container>
        <Grid container justify="center" alignItems="center" spacing={4}>
          <Grid item xs={12} md={7}>
            <Box>
              <Box mb={2}>
                <Typography variant="h2">Who am I?</Typography>
              </Box>
              <Typography
                variant="body1"
                className={classes.aboutText}
                paragraph
              >
                I am a developer (primarily of the web variety!) originally from
                England, now residing in the Canary Islands. I mainly work with{" "}
                <strong>React</strong>, <strong>Gatsby</strong>, vanilla{" "}
                <strong>JavaScript</strong> and <strong>Node</strong>, but I
                have experience of working with numerous tech such as Django,
                Laravel, Material UI, Bootstrap, PHP, Python (too many to
                mention them all without sending you to sleep!)
              </Typography>
              <Typography
                variant="body2"
                className={classes.aboutText}
                paragraph
              >
                When I am not working, I enjoy volunteering at the local dog
                rescue center, playing the piano and mountain-biking around this
                beautiful island....although not necessarily at the same time!
                :o)
              </Typography>
              <Divider />{" "}
              <Box mt={3} align="center">
                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={12} md={6}>
                    <Typography variant="body2" paragraph>
                      If you want to have a sniff of my code....
                    </Typography>

                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      startIcon={<GitHub />}
                    >
                      Check out my GitHub
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body2" paragraph>
                      If you like pics of dogs....
                    </Typography>
                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      startIcon={<Instagram />}
                    >
                      Check out my Instagram
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} style={{ overflow: "hidden" }}>
            <GridList
              cellHeight="auto"
              cols={2}
              style={{
                width: "100%",
                maxWidth: 650,
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
      <Toolbar />
    </Box>
  )
}

export default SectionAbout
