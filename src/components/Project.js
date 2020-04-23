import React from "react"

const Project = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea>
          <CardMedia>
            <Img fluid={imgsQuery.scoreboard.childImageSharp.fluid} />
          </CardMedia>
          <CardContent style={{ height: "10rem" }}>
            <Typography variant="h5">Scoreboard</Typography>
            <Typography variant="body2">
              A single page React application to help you keep score! I built it
              using Redux for state management, LocalStorage for data
              persistence and Material UI for styling.
            </Typography>
          </CardContent>
        </CardActionArea>
        <Divider />
        <CardActions>
          <Button startIcon={<Language />}>Visit</Button>
          <Button startIcon={<Code />}>Code</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Project
