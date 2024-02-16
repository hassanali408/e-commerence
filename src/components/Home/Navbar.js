import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const pages = ['Discovery', 'About', 'Contact Us'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();
  const totalCartItem = useSelector((state) => state.counter.totleCartItem);

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <>
      <AppBar position="static" sx={{ background: 'white' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent:'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
                sx={{ display: { xs: 'flex', sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color={'black'}>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  color: '#56B280',
                  textDecoration: 'none',
                }}
              >
                Candleaf
              </Typography>
            </Box>

           
              <Box
                sx={{
                  flexGrow: 0,
                  display: { xs: 'none', sm: 'flex' },
                  mx: 2,
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => {}}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                <PersonOutlineOutlinedIcon
                  sx={{
                    color: 'black',
                    mx: '15px',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                />
                <Badge
                  badgeContent={totalCartItem}
                  color="secondary"
                  sx={{
                    '& .MuiBadge-badge': {
                      backgroundColor: '#56B280',
                    },
                    color: 'black',
                    cursor: 'pointer',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  <ShoppingCartOutlinedIcon
                    sx={{
                      color: 'black',
                      fontSize: { xs: '1.5rem', md: '2rem' },
                    }}
                    onClick={handleCartClick}
                  />
                </Badge>
              </Box>
        
          </Toolbar>
        </Container>
      </AppBar>

      <Outlet />
    </>
  );
}

export default Navbar;
