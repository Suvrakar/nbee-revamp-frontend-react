import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const SearchBarNbee101Users = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <TextField
        label="Search By Email or Phone Number"
        value={searchQuery}
        onChange={handleSearchInputChange}
        onKeyPress={handleKeyPress}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBarNbee101Users;
