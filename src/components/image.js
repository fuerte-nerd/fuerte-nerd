import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "dave.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 320, maxHeight: 320) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      style={{
        maxWidth: 320,
        borderRadius: "50%",
        boxShadow: "0 .1rem .2rem rgba(0,0,0,.3)",
      }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export const GridImage1 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "daveGrid1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 320, maxHeight: 320) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      style={{
        maxWidth: 320,
        borderRadius: "50%",
        boxShadow: "0 .1rem .2rem rgba(0,0,0,.3)",
      }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export const GridImage2 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "daveGrid1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 320, maxHeight: 320) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      style={{
        maxWidth: 320,
        borderRadius: "50%",
        boxShadow: "0 .1rem .2rem rgba(0,0,0,.3)",
      }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}
