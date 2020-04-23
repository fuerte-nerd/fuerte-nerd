import React, { useEffect } from "react"

import Layout from "../components/layout"
//import { HeroImage } from "../components/image"
import SEO from "../components/seo"

//import { Grid, Container, Box, Typography, Button } from "@material-ui/core"
//import { DirectionsRun } from "@material-ui/icons"
import Navbar from "../components/Navbar"
import NavMenu from "../components/NavMenu"
import SectionHome from "../components/SectionHome"
import SectionAbout from "../components/SectionAbout"
import SectionProjects from "../components/SectionProjects"
import SectionContact from "../components/SectionContact"
import BackToTop from "../components/BackToTop"

const IndexPage = () => {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      console.log(window.scrollY)
    })
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <Navbar />
      <NavMenu />
      <SectionHome />
      <SectionAbout />
      <SectionProjects />
      <SectionContact />
      <BackToTop />
    </Layout>
  )
}
export default IndexPage
