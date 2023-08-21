import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TablePagination,
  Checkbox,
  IconButton,
  Link,
  Tooltip,
  Skeleton,
  Button,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import { Container } from "@mui/material";
import SearchBarNbee101Users from "../nbee101/SearchBarNbee101Users";

const UsersTable102 = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/usersnbee102/`)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelectedUsers(users.map((user) => user._id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleCheckboxClick = (event, userId) => {
    if (event.target.checked) {
      setSelectedUsers((prevSelected) => [...prevSelected, userId]);
    } else {
      setSelectedUsers((prevSelected) =>
        prevSelected.filter((id) => id !== userId)
      );
    }
  };

  const handleActionClick = (userId) => {
    console.log(userId); // Log the user ID
  };

  const handleSendEmail = () => {
    console.log(selectedUsers); // Log the selected user IDs
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (query) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/users/search`, {
        params: { query },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container sx={{ marginTop: 5, marginBottom: 5 }}>
      <Typography sx={{ marginTop: 5, marginBottom: 5 }} variant="h6">
        Nbee102 User List
      </Typography>
      <SearchBarNbee101Users onSearch={handleSearch} sx={{ marginBottom: 5 }} />
      <TableContainer sx={{ marginBottom: 5 }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  indeterminate={
                    selectedUsers.length > 0 &&
                    selectedUsers.length < users.length
                  }
                  checked={
                    selectedUsers.length > 0 &&
                    selectedUsers.length === users.length
                  }
                  onChange={handleSelectAllClick}
                />
                {console.log(users, "nfdfnodfsnofnodf")}
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Nbee102 Payment Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              // Display Skeletons while loading
              <TableRow>
                <TableCell colSpan={6}>
                  <Skeleton variant="rectangular" height={50} />
                </TableCell>
              </TableRow>
            ) : users.length === 0 ? (
              // Display "No users found" message if there are no search results
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No users found
                </TableCell>
              </TableRow>
            ) : users.length === 1 ? (
              // Handle single user scenario
              <TableRow key={users[0]._id}>
                <TableCell>
                  <Checkbox
                    checked={selectedUsers.includes(users[0]._id)}
                    onChange={(event) =>
                      handleCheckboxClick(event, users[0]._id)
                    }
                  />
                </TableCell>
                {/* <TableCell>{users[0].user_name}</TableCell> */}
                {/* <TableCell>{users[0].user_name}</TableCell> */}
                {/* <TableCell>{users[0].user_email}</TableCell>
                <TableCell>{users[0].nbee102_paymentStatus}</TableCell> */}
                <TableCell>
                  <IconButton
                    component={RouterLink}
                    to={`/user-nbee102-admin-view-user-form/${users[0]._id}`}
                    onClick={() => handleActionClick(users[0]._id)}
                  >
                    A
                  </IconButton>
                </TableCell>
              </TableRow>
            ) : (
              // Render actual data
              users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedUsers.includes(user._id)}
                        onChange={(event) =>
                          handleCheckboxClick(event, user._id)
                        }
                      />
                    </TableCell>
                    <TableCell>{user.user_name}</TableCell>
                    <TableCell>{user.user_name}</TableCell>
                    <TableCell>{user.user_email}</TableCell>
                    <TableCell>{user.nbee102_paymentStatus}</TableCell>
                    <TableCell>
                      <IconButton
                        component={RouterLink}
                        to={`/user-nbee102-admin-view-user-form/${user._id}`}
                        onClick={() => handleActionClick(user._id)}
                      >
                        A
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSendEmail}
        disabled={selectedUsers.length === 0}
      >
        Send Email
      </Button>
    </Container>
  );
};

export default UsersTable102;
