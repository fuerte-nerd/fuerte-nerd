import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GridList, GridListTile } from "@material-ui/core"
import Img from "gatsby-image"

const ImageGrid = () => {
  const data = useStaticQuery(graphql`
    {
      dave2: file(name: { eq: "daveGrid2" }) {
        childImageSharp {
          fluid(maxWidth: 325, maxHeight: 325, cropFocus: ATTENTION) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dave4: file(name: { eq: "daveGrid4" }) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dave5: file(name: { eq: "daveGrid5" }) {
        childImageSharp {
          fluid(maxWidth: 325, maxHeight: 325, cropFocus: ATTENTION) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <GridList
      cellHeight="auto"
      cols={2}
      style={{
        width: "100%",
        maxWidth: 650,
        overflow: "hidden",
        margin: "auto",
      }}
    >
      <GridListTile cols={2}>
        <Img fluid={data.dave4.childImageSharp.fluid} />
      </GridListTile>
      <GridListTile>
        <Img fluid={data.dave5.childImageSharp.fluid} />
      </GridListTile>
      <GridListTile>
        <Img fluid={data.dave2.childImageSharp.fluid} />
      </GridListTile>
    </GridList>
  )
}

export default ImageGrid
