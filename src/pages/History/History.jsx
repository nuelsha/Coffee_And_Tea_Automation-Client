import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./history.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

const createData = (name, amount, date) => {
  return { name, amount, date };
};

const rows = [
  createData("Tea", 2, "2024-12-12"),
  createData("Tea", 3, "2024-12-10"),
  createData("Coffee", 9, "2024-12-08"),
  createData("Tea", 2, "2024-12-07"),
  createData("Tea", 6, "2024-12-05"),
  createData("Tea", 6, "2024-12-05"),
  createData("Tea", 6, "2024-12-05"),
  createData("Tea", 6, "2024-12-05"),
  createData("Tea", 6, "2024-12-05"),
  createData("Tea", 6, "2024-12-05"),
  createData("Coffee", 2, "2024-12-03"),
  createData("Tea", 4, "2024-12-02"),
  createData("Coffee", 2, "2024-12-01"),
];

const History = () => {
  return (
    <div className="user-history">
      <ThemeProvider theme={darkTheme}>
        <Paper
          style={{
            margin: "5px auto",
            padding: "5px 20px",
            maxWidth: "900px",
            backgroundColor: darkTheme.palette.background.paper,
          }}>
          <Typography
            variant="h5"
            style={{
              marginBottom: "16px",
              color: darkTheme.palette.text.primary,
            }}>
            Transaction History
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    style={{ color: darkTheme.palette.text.primary }}>
                    Number
                  </TableCell>
                  <TableCell style={{ color: darkTheme.palette.text.primary }}>
                    Item
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ color: darkTheme.palette.text.primary }}>
                    Amount
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ color: darkTheme.palette.text.primary }}>
                    Date
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={index}
                    style={{
                      backgroundColor: darkTheme.palette.background.default,
                    }}>
                    <TableCell
                      align="left"
                      style={{ color: darkTheme.palette.text.primary }}>
                      {index + 1}
                    </TableCell>
                    <TableCell
                      style={{ color: darkTheme.palette.text.secondary }}>
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: darkTheme.palette.text.secondary }}>
                      {row.amount}
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: darkTheme.palette.text.secondary }}>
                      {row.date}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default History;
