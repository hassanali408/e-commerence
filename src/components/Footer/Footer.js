  import { Box, Divider, Typography } from '@mui/material'
  import React from 'react'
  import './footer.css'
  import bgicon from '../img/bgicon.png'
  import bgiconlogo from '../img/bgiconlogo.png'

  export default function Footer() {
    return (
      <Box className="footer">
          <Box className='divider' />
        <Box className='footer-wrapper'>
        
          <Box className='footerlogo'>
            <img src={bgicon} alt="bgicon" style={{left:'0px',position:'absolute'}}/>
            <img src={bgiconlogo} alt="bgiconlogo" style={{position:'absolute',left:'70px',top:'20px'}} />
            <Typography color={'white'} fontSize={'14px'} fontStyle={'bold'} textAlign={'left'} pt={'70px'}>Your natural candle made for<br /> your home and for your wellness.</Typography>
          </Box>
          
          <Box className="listContainer">
        <Box className="listItem">
          <Typography variant="h7" color={'#56B280'}>Discovery</Typography>
          <Box className="child">New Season</Box>
          <Box className="child">Most Searched</Box>
          <Box className="child">Most Selled</Box>
        </Box>

        <Box className="listItem">
          <Typography variant="h7" color={'#56B280'}>About</Typography>
          <Box className="child">Help</Box>
          <Box className="child">Shipping</Box>
          <Box className="child">Affiliate</Box>
        </Box>

        <Box className="listItem">
          <Typography variant="h7" color={'#56B280'}>Info</Typography>
          <Box className="child">Contect us</Box>
          <Box className="child">Privacy policies</Box>
          <Box className="child">Terms & Conditions</Box>
        </Box>
      </Box>
        </Box>
      </Box>
    )
  }
