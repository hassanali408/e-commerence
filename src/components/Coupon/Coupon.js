import React, { useState, useEffect } from 'react';
import { Badge, Button, Divider, Pagination, TextField, Typography } from '@mui/material';
import { useSelector } from 'react-redux';


const Coupen = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totleCartItem = useSelector((state) => state.counter.totleCartItem)
    const cart = useSelector((state) => state.counter.ItemInCart);
    const [couponCheck,setcouponCheck] = useState('');
    const [CoupenApplied,setCouponApplied] = useState(false);
    const couponCode='HappyNewYear';


    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % cart.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex, cart.length]);

    const hanldeSubTotalBill = () => {
        const totals = cart.map((checkItems) => {
          const individualSubtotal = (checkItems.price * checkItems.inventory).toFixed(2);
          return parseFloat(individualSubtotal);
        });
      
        const subtotal = totals.reduce((sum, value) => sum + value, 0);
        return subtotal.toFixed(2);
      };

  const handleChange = (e) => {
    setcouponCheck(e.target.value);
  };

  const handleClick = () => {
    if (couponCode === couponCheck) {
      setCouponApplied(true);
    } else {
      setCouponApplied(false);
    }
  };

  const calculateDiscountedTotal = () => {
    const totalAmount = parseFloat(hanldeSubTotalBill());
    const discountPercentage = 10;
    const discountAmount = (totalAmount * discountPercentage) / 100;
    const discountedTotal = totalAmount - discountAmount;
    return discountedTotal.toFixed(2);
  };
    return (
        <div style={{ background: '#f2f2f2', height: '100vh',display:'flex',flexDirection:'column',alignItems:'center' }}>
            <div style={{ padding: '50px 0px 50px 0px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '40px', justifyContent: 'flex-start' }}>

                    <Badge badgeContent={totleCartItem} color="secondary"
                        sx={{
                            '& .MuiBadge-badge': {
                                backgroundColor: '#56B280',
                            },
                            color: 'black',
                            cursor: 'pointer',
                            '&:hover': { color: 'primary.main' },

                        }} >
                        <img src={cart[activeIndex].image} alt={`carousel-item-${activeIndex}`} style={{ width: '100%', background: '#f7f8fa' }} />
                    </Badge>
                    <div style={{ textAlign: 'left', }}>
                        <Typography fontSize={'24px'} fontFamily={'Poppins'} fontWeight={'bold'} p={'0 5px 5px 5px'} width={'200px'}>{cart[activeIndex].title}</Typography>
                        <Typography fontSize={'20px'} fontWeight={'bold'} color={'#56B280'} p={'0 10px 10px 10px'} >$ {cart[activeIndex].price}</Typography>
                    </div>

                </div>
                <div style={{ marginTop: '10px' }}>
                    <Pagination
                        count={cart.length}
                        page={activeIndex + 1}
                        onChange={(event, value) => setActiveIndex(value - 1)}
                        shape="rounded"
                        size="small"
                    />
                </div>
            </div>
            <Divider sx={{ background: 'black',width:'80%'}} />
            <div style={{padding:'20px 0px',width:'80%' }}>
                <input type='text' placeholder='Coupon Code' style={{ padding: '6px', width: '80%' }} onChange={handleChange}></input>
                <button style={{
                    background: '#A8A8A8', color: "white", border: 'none', textAlign: 'center'
                    , padding: '8px', borderRadius: '2px', marginLeft: '5px' 
                }} onClick={handleClick}>Add code</button>
            </div>
            <Divider sx={{ background: 'black',width:'80%' }} />

            <div style={{display:'flex',flexDirection:'column',width:'80%',padding:'10px 0px'}}>
                <div style={{display:'flex',justifyContent:'space-between',padding:'5px'}}>
                <Typography sx={{fontSize:'14px',fontWeight:'bold'}}>Subtotal</Typography>
                <Typography sx={{fontSize:'14px',fontWeight:'bold'}}>$ {hanldeSubTotalBill()}</Typography>
                </div>

                <div style={{display:'flex',justifyContent:'space-between',padding:'5px'}}>
                <Typography sx={{fontSize:'14px',fontWeight:'bold'}}>Shipping</Typography>
                <Typography sx={{fontSize:'14px',fontWeight:'bold'}}>-</Typography>
                </div>
            </div>
            <Divider sx={{ background: 'black',width:'80%' }} />
            <div style={{display:'flex',flexDirection:'column',width:'80%',padding:'10px 0px'}}>

         
            <div style={{display:'flex',justifyContent:'space-between',padding:'5px'}}>
                <Typography sx={{fontSize:'18px',color:'#56B280',fontWeight:'bold'}}>
                    Total{CoupenApplied && (
                            <Typography sx={{ fontSize: '10px', color: '#56B280'}}>Coupon<br /> Applied</Typography>
                        )}</Typography>
                <Typography sx={{fontSize:'22px',fontWeight:'bold',color:'#56B280'}}>$  {CoupenApplied ? calculateDiscountedTotal() : hanldeSubTotalBill()}</Typography>
                </div>
                </div>
        </div>
    );
};

export default Coupen;
