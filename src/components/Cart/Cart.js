import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './cart.css';
import { decrementTotalCartItem, setCart } from '../Redux/chatSlice';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const cart = useSelector((state) => state.counter.ItemInCart);
  const selectedOption = useSelector((state) => state.counter.selectedOption)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleRemoveClick = (row) => {
    const updatedCart = cart.filter((item) => item.id !== row.id);
    dispatch(setCart(updatedCart));
    dispatch(decrementTotalCartItem());
  };

  const handletotal = (price, inventory) => {
    if(selectedOption==='option1'){
    return (price * inventory).toFixed(2);
    }else{
      return (price * inventory * 0.9).toFixed(2);
    }

  }


  const hanldeSubTotalBill = (items) => {
    const totals = items.map((checkItems) => {
      const individualSubtotal = (checkItems.price * checkItems.inventory).toFixed(2);
      return parseFloat(individualSubtotal);
    });

    const subtotal = totals.reduce((sum, value) => sum + value, 0);
    return subtotal.toFixed(2);
  };

  const handleClick = () => {
    navigate('/details');
  }

  window.addEventListener('popstate', function (event) {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Box className='cartWraper'>
        <Box className='cartInner'>
          <h2>Your cart items</h2>
          <h5><a href='/' style={{ color: '#56B280' }}>Back to shopping</a></h5>

          <Box>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell align="left">Price</TableCell>
                    <TableCell align="left">Quantity</TableCell>
                    <TableCell align="left">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((row) => (
                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row" sx={{display:'flex'}} >
                        <img src={row.image} alt={row.title} className="productImage" />
                        <Box display="flex" flexDirection="column" ml={2}>
                          <Typography color="#272727" fontSize="22px" fontWeight="bold">{row.title}</Typography>
                          <Typography fontSize="14px" color="#56B280" mt="8%" sx={{ textDecorationLine: 'underline', cursor: 'pointer' }} onClick={() => handleRemoveClick(row)}>Remove</Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="left" sx={{ fontWeight: 'bold' }}>${row.price}</TableCell>
                      <TableCell align="left">{row.inventory}</TableCell>
                      <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                        ${handletotal(row.price, row.inventory)}
                        {selectedOption === 'option2' && (
                          <Typography fontSize="12px" color="#56B280" display= 'inline-block' marginLeft= '8px'>
                            Discount applied
                          </Typography>
                        )}
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box display="flex" justifyContent="flex-end" gap={2} className="checkoutBox">
              <Box display="flex" flexDirection="column" width="25%" mr={4}>
                <Box display="flex" gap={2} justifyContent="flex-end">
                  <Typography fontSize="16px" fontWeight="bold">Sub-total</Typography>
                  <Typography fontSize="16px" fontWeight="bold">${hanldeSubTotalBill(cart)}</Typography>
                </Box>
                <Box mt={1}>
                  <Typography color="#9E9E9E" fontSize="12px">Tax and shipping cost will be calculated later</Typography>
                </Box>
              </Box>
              <Box>
                <button className="checkoutBtn" onClick={() => handleClick(cart)}>Check-out</button>
              </Box>
            </Box>
          </Box>
        </Box>


      </Box>
      <Footer />
    </>
  )
}
