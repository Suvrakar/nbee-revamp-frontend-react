import React, { useState, useEffect } from "react";
import {
  TextField,
  Switch,
  FormControlLabel,
  Button,
  Grid,
} from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserForm = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    paymentNbee101Status: false,
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/user/${id}`)
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
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
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
                checked={formData.paymentStatus}
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
    </form>
  );
};

export default UserForm;
