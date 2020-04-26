import React from "react"
import Helmet from "react-helmet"

const OGTags = () => {
  return (
    <Helmet>
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta
        property="og:description"
        content={data.site.siteMetadata.description}
      />
      <meta
        property="og:description"
        content={data.site.siteMetadata.description}
      />
    </Helmet>
  )
}

export default OGTags
