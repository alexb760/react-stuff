// 2.
// after creating a hook { useDispatch } wee need to use somewhere so we invoke { useEffect}
// { useEffect} replase didMount, didUnMount didUpdate components.
import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
//1.
//Creating a Hook from react Redux.
// with this we can dispatch an action from UI to Redux and then call a API
import { useDispatch } from "react-redux";

//3.
// Import and action from ./actions.
import { getPosts } from "./acctions/posts";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  // investigate what are the cases we need to include the array in the useEfect.
  // useEffect(() => {}, [])
  // useEffect(() => {})
  // useEffect(() => {}, [<some-action>])
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  });
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories SM
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts></Posts>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
