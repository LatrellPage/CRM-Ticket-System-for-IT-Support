"use client"
import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, customer, issue, assignedBy, status) {
  return { id, date, customer, issue, assignedBy, status };
}

const rows = [
  createData(
    0,
    '8 Jan, 1935',
    'Elvis Presley',
    'Login Error',
    'John Doe',
    'Open',
  ),
  createData(
    1,
    '18 Jun, 1942',
    'Paul McCartney',
    'Collect Payment Error',
    'Jane Doe',
    'Under Review',
  ),
  createData(
    2,
    '10 Mar, 1947',
    'Tom Scholz',
    'User Credentials Error', 
    'Doe John',
    'Open'),
  createData(
    3,
    '29 Aug, 1958',
    'Michael Jackson',
    'Cancel Service',
    'Doe Jane',
    'Waiting Approval',
  ),
  createData(
    4,
    '23 Sep, 1949',
    'Bruce Springsteen',
    'Sync Sales Request',
    'Some Guy',
    'Waiting Approval',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Tickets</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Issue</TableCell>
            <TableCell>Assigned By</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.issue}</TableCell>
              <TableCell>{row.assignedBy}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more tickets
      </Link>
    </React.Fragment>
  );
}