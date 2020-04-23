import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { toggleBackToTop } from "../redux/actions"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Navbar from "../components/Navbar"
import NavMenu from "../components/NavMenu"
import SectionHome from "../components/SectionHome"
import SectionAbout from "../components/SectionAbout"
import SectionProjects from "../components/SectionProjects"
import SectionContact from "../components/SectionContact"
import BackToTop from "../components/BackToTop"

const IndexPage = props => {
  const [compState, setCompState] = useState({
    timer1: 0,
    timer2: 0,
  })
  useEffect(() => {
    console.log("helloooo")
    if (!props.isSmoothScrolling) {
      console.log("triggered")
    }
  }, [window.scrollY])

  return (
    <Layout>
      <SEO title="Home" />
      <Navbar />
      <NavMenu />
      <SectionHome />
      <SectionAbout />
      <SectionProjects />
      <SectionContact />
      {props.backToTopVisible ? <BackToTop /> : null}
    </Layout>
  )
}

const mapStateToProps = state => ({
  backToTopVisible: state.backToTopVisible,
  isSmoothScrolling: state.isSmoothScrolling,
})
export default connect(mapStateToProps)(IndexPage)
