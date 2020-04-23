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
    timer: 0,
  })
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        props.dispatch(toggleBackToTop(true))
        if (compState.timer) {
          clearTimeout(compState.timer)
        }
        setCompState({
          timer: setTimeout(props.dispatch(toggleBackToTop(false)), 2500),
        })
      }
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
      {props.backToTopVisible ? <BackToTop /> : null}
    </Layout>
  )
}

const mapStateToProps = state => ({
  backToTopVisible: state.backToTopVisible,
})
export default connect(mapStateToProps)(IndexPage)
