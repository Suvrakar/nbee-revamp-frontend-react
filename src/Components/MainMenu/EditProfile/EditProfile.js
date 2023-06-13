import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const EditSectionForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
  };

  return (
    <Container maxWidth="sm" sx={{ paddingY: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/path/to/image.jpg"
            alt="Profile"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="University Name"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Phone Number"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Password"
              fullWidth
              margin="normal"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handlePasswordVisibility}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Changes
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditSectionForm;
