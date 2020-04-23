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
    document.addEventListener("scroll", () => {
      if (compState.timer1) {
        clearTimeout(compState.timer1)
      }

      setCompState({
        timer1: setTimeout(() => {
          if (window.scrollY > 0) {
            if (compState.timer2) {
              clearTimeout(compState.timer2)
            }
            props.dispatch(toggleBackToTop(true))
            setCompState({
              timer2: setTimeout(
                () => props.dispatch(toggleBackToTop(false)),
                3000
              ),
            })
          }
        }, 1000),
      })
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
