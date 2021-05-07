import { Box, Button, TextField } from "@material-ui/core";
import { useReducer } from "react";
import handleInputData from "../../../Utils/eventHelpers/handleInputData";

function AddPost({ submitTo = null }) {
  const [formState, dispatch] = useReducer(
    (state, action) => ({ ...state, ...action }),
    {}
  );

  const submitHandler = (event) => {
    event.preventDefault();
    if(submitTo) submitTo(formState);
  };

  return (
    <>
      <Box component="form" onSubmit={submitHandler}>
        <TextField
          name="title"
          label="Title"
          style={{ margin: 8 }}
          placeholder="Type the title"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleInputData(dispatch)}
        />
        <TextField
          name="content"
          label="Content"
          style={{ margin: 8 }}
          placeholder="Type the content"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleInputData(dispatch)}
        />
        <Button variant="contained" color="primary" type="submit">
          Post
        </Button>
      </Box>
    </>
  );
}

export default AddPost;
