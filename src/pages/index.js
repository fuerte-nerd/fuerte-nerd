import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { toggleBackToTop, setBackToTopTimer } from "../redux/actions"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Navbar from "../components/Navbar"
import NavMenu from "../components/NavMenu"
import SectionHome from "../components/SectionHome"
import SectionAbout from "../components/SectionAbout"
import SectionProjects from "../components/SectionProjects"
import SectionContact from "../components/SectionContact"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"

const IndexPage = props => {
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0 && !props.isSmoothScrolling) {
        props.dispatch(toggleBackToTop(true))
        clearTimeout(props.backToTopTimer)
        props.dispatch(
          setBackToTopTimer(
            setTimeout(() => props.dispatch(toggleBackToTop(false)), 2000)
          )
        )
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [props.isSmoothScrolling, props.backToTopTimer])

  return (
    <Layout>
      {/*<SEO title="Home" />*/}
      <Navbar />
      <NavMenu />
      <SectionHome />
      <SectionAbout />
      <SectionProjects />
      <SectionContact />
      <Footer />
      <BackToTop />
    </Layout>
  )
}

const mapStateToProps = state => ({
  backToTopVisible: state.backToTopVisible,
  isSmoothScrolling: state.isSmoothScrolling,
  backToTopTimer: state.backToTopTimer,
})
export default connect(mapStateToProps)(IndexPage)
