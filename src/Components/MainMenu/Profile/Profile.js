import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ProfilePictureSection from "./ProfilePictureSection";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import CourseCard from "../CourseCards/CourseCard";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!accessToken) {
      navigate("/nbee/login");
    } else {
      fetchUserProfile();
    }
  }, [accessToken, navigate]);

  const fetchUserProfile = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL + "/profile"}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
        if (error.response) {
          console.log("Response status:", error.response.status);
          console.log("Response data:", error.response.data);
        }
        // Handle error scenarios
      });
  };

  const handleSnackbarClose = () => {
    // Handle close event of the Snackbar
  };

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ProfilePictureSection props={user ? user : ""} />
          </Grid>
          <Grid item xs={12} md={6}>
            {user && user.role === "superadmin" && (
              <Button
                style={{ marginTop: 20 }}
                component={Link}
                to="/user-main-admin-view"
                variant="outlined"
                color="primary"
              >
                Admin Dashboard
              </Button>
            )}
          </Grid>
          <Grid item xs={8} md={4}>
            <Card>
              <CardContent sx={{ backgroundColor: "" }}>
                <Typography variant="h6">Total Enrolled Course(s)</Typography>
                <Typography variant="body1">2</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={8} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Certificate(s)</Typography>
                <Typography variant="body1">2</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={8} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Devices</Typography>
                <Typography variant="body2">
                  2 (Only 2 Devices Can Be accessed through a user id)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <br />
        <Typography>Available Courses:</Typography>
        <CourseCard />
        {!accessToken && (
          <Snackbar
            open={true}
            autoHideDuration={4000}
            onClose={handleSnackbarClose}
          >
            <MuiAlert severity="error" onClose={handleSnackbarClose}>
              Token expired
            </MuiAlert>
          </Snackbar>
        )}
      </Container>
    </>
  );
};

export default UserProfile;
