
import { Box } from '@mui/material';
import React, { } from 'react';
import Coupon from '../Coupon/Coupon';
import NavbarCheckOut from '../CheckOutNavbar';
import CustomSeparator from '../Breadcrumbs/Breadcrumbs';
import { Outlet } from 'react-router-dom';


export default function Details() {
 

  return (
    <Box display={'flex'}>
      <Box width={'50%'} height={'100vh'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Box display={'flex'} justifyContent={'flex-start'} width={'80%'}>
          <NavbarCheckOut />
        </Box>
        <Box width={'80%'} display={'flex'} justifyContent={'flex-start'}>
          <CustomSeparator />
        </Box>

      <Outlet />
      </Box>

      <Box width={'50%'} height={'100vh'}>
        <Coupon />
      </Box>
    </Box>
  );
}
