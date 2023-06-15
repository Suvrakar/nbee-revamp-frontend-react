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
} from "@mui/material";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/")
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

  return (
    <div>
      <TableContainer component={Paper}>
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
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Nbee101 Payment Status</TableCell>
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
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.paymentStatus}</TableCell>
                    <TableCell>
                      <IconButton
                        component={RouterLink}
                        to={`/user-nbee101-admin-view-user-form/${user._id}`}
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
    </div>
  );
};

export default UsersTable;
