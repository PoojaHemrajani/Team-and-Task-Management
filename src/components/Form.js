import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import React from 'react'

const Form = () => {
  const [privacy, setprivacy] = React.useState("");

  const handleChange = (event) => {
    setprivacy(event.target.value);
  };
  return (
    <form onSubmit="new_project_func()" method="post">
      <TextField
        sx={{ m: 1 }}
        name="image"
        type="file"
        id="outlined-basic"
        label="Image"
        variant="outlined"
      />
      <TextField
        sx={{ m: 1 }}
        name="name"
        type="text"
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <TextField
        sx={{ m: 1 }}
        name="category"
        type="text"
        id="outlined-basic"
        label="Category"
        variant="outlined"
      />
      <TextField
        sx={{ m: 1 }}
        name="description"
        type="text"
        id="outlined-basic"
        label="Description"
        variant="outlined"
      />
      <FormControl sx={{ m: 1 }} fullWidth>
        <InputLabel id="demo-simple-select-label">Privacy</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={1}
          label="Privacy"
          onChange={handleChange}
          name="privacy"
        >
          <MenuItem value={1}>Public</MenuItem>
          <MenuItem value={0}>Private</MenuItem>
        </Select>
      </FormControl>
      <Button sx={{ m: 1 }} type="submit" variant="contained">
        Save
      </Button>
    </form>
  );
};

export default Form;
