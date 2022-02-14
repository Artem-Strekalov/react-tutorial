import React from "react";
import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, spacing } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { convertLength } from "@mui/material/styles/cssUtils";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: spacing(10),
  },
  title: {
    flexGrow: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: "rgba(0,0,0, 0.3)",
  },
  mainFeaturesPost: {
    position: "relative",
    color: "#fff",
    marginBottom: 4,
    marginTop: 64,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: 3,
    color: "#fff",
    padding: 9,
  },
}));

const Layout = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              ArtStrekalov
            </Typography>

            <Box mr={3}>
              <Button color="inherit" variant="outlined">
                Log In
              </Button>
            </Box>
            <Button color="secondary" variant="contained">
              Sign Up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Paper
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
          className={classes.mainFeaturesPost}
        >
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    Art Strekalov
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cupiditate adipisci ducimus voluptate, animi mollitia
                    architecto ab libero? Debitis animi tempore perferendis nam
                    itaque nemo doloribus.
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </main>
    </>
  );
};
export default Layout;
