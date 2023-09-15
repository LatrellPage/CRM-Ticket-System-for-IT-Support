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
      <Title>Customer Contact</Title>
      <Typography component="p" variant="h4">
        Elvis Presley
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        ElvisPresley@theking.com
        555-555-5555
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Customer Profile
        </Link>
      </div>
    </React.Fragment>
  );
}