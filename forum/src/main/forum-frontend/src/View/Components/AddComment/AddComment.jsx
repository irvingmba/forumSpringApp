import { Box, Button, TextField } from "@material-ui/core";
import { useReducer } from "react";
import handleInputData from "../../../Utils/eventHelpers/handleInputData";

function AddComment({ submitTo = null, post }) {
  const [formState, dispatch] = useReducer(
    (state, action) => ({ ...state, ...action }),
    {}
  );

  const submitHandler = (event) => {
    event.preventDefault();
    if (submitTo) submitTo(formState);
  };
  return (
    <Box component="form" onSubmit={submitHandler}>
      <TextField
        name="comment"
        label="Comment"
        style={{ margin: 8 }}
        placeholder="Type your comment"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleInputData(dispatch)}
      />
      <Button variant="contained" color="primary" type="submit">
        Comment
      </Button>
    </Box>
  );
}

export default AddComment;