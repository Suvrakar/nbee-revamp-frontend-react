import { Button } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function AdminMainView() {
  return (
    <div>
      <Container>
        <h3>Admin Dashboard</h3>
        <div style={{ margin: "20px" }}>
          {/* Use Link component with 'to' prop to specify the route */}
          <Link to="/user-nbee101-admin-view">
            <Button variant="outlined" color="primary" sx={{ marginTop: 2, padding:'10px', margin:'10px' }}>
              View Nbee101
            </Button>
          </Link>
          <Link to="/user-nbee102-admin-view">
            <Button variant="outlined" color="primary" sx={{ marginTop: 2,padding:'10px', margin:'10px' }}>
              View Nbee102
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
