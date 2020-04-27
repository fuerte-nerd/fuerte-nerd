import React from "react"
import { connect } from "react-redux"
import { setConfirmDialog } from "../redux/actions"
import { useStaticQuery, graphql } from "gatsby"
import {
  Divider,
  Box,
  Container,
  Grid,
  Typography,
  Toolbar,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { GitHub, Instagram } from "@material-ui/icons"
import { Fade } from "react-reveal"
import SectionHeading from "./SectionHeading"
import AboutExternalLink from "./AboutExternalLink"
import ImageGrid from "./ImageGrid"
const useStyles = makeStyles(theme => ({
  aboutText: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "justify",
    },
  },
}))

const SectionAbout = props => {
  const classes = useStyles()
  const query = useStaticQuery(graphql`
    {
      site: site {
        siteMetadata {
          links {
            github
            instagram
          }
        }
      }
    }
  `)
  const handleClick = e => {
    const f = e.currentTarget
    switch (f.id) {
      case "github":
        return props.dispatch(
          setConfirmDialog({
            title: "Open GitHub?",
            text: "Continue to my GitHub profile?",
            y: "Yes",
            n: "No",
            action: () => {
              window.open(
                `https://github.com/${query.site.siteMetadata.links.github}`,
                "_blank"
              )
              props.dispatch(
                setConfirmDialog({
                  isOpen: false,
                })
              )
            },
            isOpen: true,
          })
        )
      case "instagram":
        return props.dispatch(
          setConfirmDialog({
            title: "Open Instagram?",
            text: "Continue to my Instagram profile?",
            y: "Yes",
            n: "No",
            action: () => {
              window.open(
                `https://instagram.com/${query.site.siteMetadata.links.instagram}`,
                "_blank"
              )
              props.dispatch(
                setConfirmDialog({
                  isOpen: false,
                })
              )
            },
            isOpen: true,
          })
        )
    }
  }
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
      boxShadow={2}
    >
      <Toolbar />
      <Container>
        <Grid container justify="center" alignItems="center" spacing={4}>
          <Grid item xs={12} md={7}>
            <Fade>
              <SectionHeading title="About" subtitle="Who am I?" />
            </Fade>
            <Fade left>
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
            </Fade>
            <Fade left>
              <Typography
                variant="body2"
                className={classes.aboutText}
                paragraph
              >
                I love my work but when I am not working, I enjoy volunteering
                at the local dog rescue center, playing the piano and
                mountain-biking around this beautiful island....although not
                necessarily at the same time! :o)
              </Typography>
            </Fade>
            <Fade left>
              <Divider />
            </Fade>

            <Box mt={3} align="center">
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Fade>
                    <AboutExternalLink
                      intro="If you're into code, check out..."
                      icon={<GitHub />}
                      clickHandler={handleClick}
                      id="github"
                      buttonText="My GitHub"
                    />
                  </Fade>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Fade>
                    <AboutExternalLink
                      intro="If dogs are your thing, check out..."
                      icon={<Instagram />}
                      clickHandler={handleClick}
                      id="instagram"
                      buttonText="My Instagram"
                    />
                  </Fade>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} style={{ overflow: "hidden" }}>
            <Fade>
              <ImageGrid />
            </Fade>
          </Grid>
        </Grid>
      </Container>
      <Toolbar />
    </Box>
  )
}

const mapStateToProps = state => ({
  confirmDialog: state.confirmDialog,
})

export default connect(mapStateToProps)(SectionAbout)
