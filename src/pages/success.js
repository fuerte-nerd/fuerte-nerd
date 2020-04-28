import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Box, Typography, Button } from "@material-ui/core"
import { Home } from "@material-ui/icons"
import Layout from "../components/layout"

const Success = () => {
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    if (countdown === 0) {
      return navigate("/")
    }
    setTimeout(() => setCountdown(countdown - 1), 1000)
  }, [countdown])

  const handleClick = () => {
    navigate("/")
  }

  return (
    <Layout>
      <Box
        bgcolor="primary.light"
        display="flex"
        flexDirection="column"
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center"
        align="center"
      >
        <Typography variant="h2">Sent!</Typography>
        <Typography variant="subtitle1">
          Thanks. I've got your message. I'll reply as soon as possible.
        </Typography>
        <Typography variant="subtitle2" paragraph>
          You will be taken back to the site in {countdown}{" "}
          {countdown === 1 ? ` second` : ` seconds`}...
        </Typography>
        <Typography variant="caption">Can't wait? No problem!</Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<Home />}
          onClick={handleClick}
        >
          Return to home
        </Button>
      </Box>
    </Layout>
  )
}

export default Success
