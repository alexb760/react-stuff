// to handle data from the FORM (DOM) and react back-and-forward.
// we use a hook call useState
import React, { useState } from "react";
import useStyles from "./styles";
//Creating the new Post form
import { TextField, Button, Typography, Paper } from "@material-ui/core";

const Form = () => {
  const classes = useStyles();
  //Setting up the hook useState.
  // The object inside the useState({}) we difene the form structure filds.
  const [postData, setPostDate] = useState({
    creator: "",
    title: "",
    tags: "",
    selectedFile: "",
  });
  const handleSubmit = () => {};
  return (
    <Paper className={classes.paper}>
      <Form
        autocomplete="off"
        novalidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6"> Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostDate({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostDate({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostDate({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostDate({ ...postData, tags: e.target.value })}
        />
      </Form>
    </Paper>
  );
};

export default Form;
