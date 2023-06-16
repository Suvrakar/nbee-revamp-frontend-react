import React, { useState, useEffect } from "react";
import {
  TextField,
  Switch,
  FormControlLabel,
  Button,
  Grid,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

const UserForm = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    paymentStatus: "false", // Set as boolean value
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/user/${id}`)
        .then((response) => {
          setUser(response.data);
          setFormData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSwitchChange = (event) => {
    const { name, checked } = event.target;
    console.log(JSON.parse(checked));
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: JSON.parse(checked),
    }));
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (id) {
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/user/${id}`, formData)
        .then((response) => {
          console.log("User updated:", response.data);
          setShowSuccess(true);
        })
        .catch((error) => {
          console.error("Error updating user:", error);
          setShowError(true);
        });
    }
  };

  return (
    <Container sx={{ marginTop: 5, marginBottom: 5 }}>
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            required
            type="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="phone"
            label="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Switch
                name="paymentStatus"
                checked={JSON.parse(formData.paymentStatus)}
                onChange={handleSwitchChange}
                color="primary"
              />
            }
            label="Payment Nbee101 Status"
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        open={showSuccess}
        autoHideDuration={4000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <MuiAlert
          onClose={handleCloseSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          {id ? "User updated successfully." : "User created successfully."}
        </MuiAlert>
      </Snackbar>

      <Snackbar
        open={showError}
        autoHideDuration={4000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <MuiAlert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          {id ? "Error updating user." : "Error creating user."}
        </MuiAlert>
      </Snackbar>
    </form>
    </Container>
  );
};

export default UserForm;
