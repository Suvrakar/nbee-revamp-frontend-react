import React, { useState } from "react";
import { Container, Avatar, Typography } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ProfilePictureSection = ({ props }) => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handlePictureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Perform any necessary validation or resizing of the image here
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  return (
    <Container
      maxWidth=""
      sx={{ display: "flex", alignItems: "flex-start", py: 4 }}
    >
      <label htmlFor="upload-picture">
        <Avatar
          alt="Profile Picture"
          src={profilePicture}
          sx={{ width: 200, height: 200, marginRight: 2, cursor: "pointer" }}
        >
          <input
            id="upload-picture"
            type="file"
            accept="image/*"
            onChange={handlePictureUpload}
            style={{ display: "none" }}
          />
          <PhotoCamera sx={{ width: 48, height: 48 }} />
        </Avatar>
      </label>
      <div>
        {props.name ? (
          <>
            <Typography variant="h5" gutterBottom>
              {props.name}
            </Typography>
            <Typography variant="h7" gutterBottom>
              {props.role}
            </Typography>
          </>
        ) : (
          <Stack spacing={1}>
            <Skeleton width={200} height={30} animation="wave" />
            <Skeleton width={120} height={20} animation="wave" />
          </Stack>
        )}
      </div>
    </Container>
  );
};

export default ProfilePictureSection;
