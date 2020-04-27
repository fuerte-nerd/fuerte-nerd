import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const SEO = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          url
          ogImage
          titleSuffix
        }
      }
    }
  `)
  return (
    <Helmet>
      <title>
        {data.site.siteMetadata.title} | {data.site.siteMetadata.titleSuffix}
      </title>
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta
        property="og:description"
        content={data.site.siteMetadata.description}
      />
      <meta property="og:url" content={data.site.siteMetadata.url} />
      <meta property="og:image" content={data.site.siteMetadata.ogImage} />
      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

export default SEO
