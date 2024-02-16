import React from 'react'

import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'


export default function NavbarCheckOut() {

    return (
        <Box >
            <AppBar position="static" sx={{ backgroundColor: 'white',boxShadow:'none',p:'0px',m:'0px'}}>
                <Container disableGutters maxWidth="xl" >
                    <Toolbar disableGutters >
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: 'flex',
                                fontFamily: 'Roboto',
                                fontWeight: 600,
                                letterSpacing: '.05rem',
                                color: '#56B280',
                                textDecoration: 'none',
                                textAlign:'left'
                            }}>
                            Candleaf
                        </Typography>

              
                    </Toolbar>
                </Container>
            </AppBar>




        </Box>
    )
}
