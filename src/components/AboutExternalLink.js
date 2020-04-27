import React from "react"

const AboutExternalLink = () => {
  return (
    <>
      {" "}
      <Typography variant="body2" paragraph>
        If you're into code, check out....
      </Typography>
      <Button
        fullWidth
        style={{ maxWidth: 300 }}
        variant="contained"
        color="secondary"
        startIcon={<GitHub />}
        onClick={handleClick}
        id="github"
      >
        My GitHub
      </Button>
    </>
  )
}

export default AboutExternalLink
