"use client"
import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Issue</Title>
      <Typography component="p" variant="h4">
        Login Error
      </Typography>
      {/* add padding so that "Login Erro" and "Customer Input have space between" */}
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        "Customer Issue Input"
      </Typography>
      <div>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          View Customer Profile
        </Link> */}
      </div>
    </React.Fragment>
  );
}