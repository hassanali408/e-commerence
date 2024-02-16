
import { Box, Typography } from '@mui/material';
import { Button } from 'bootstrap';
import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Details() {
  const navigate = useNavigate();

  const [isLogin,setisLogin] = useState(false);
  const [loginEmail,setloginEmail] = useState();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    secondName: '',
    addressAndNumber: '',
    shippingNote: '',
    city: '',
    postalCode: '',
    province: '',
    countryRegion: '',
    saveInfo: false,
    shipping: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({...prevData,
      [name]: type === 'checkbox' ? checked : value,

    }));
  };

  const handleChangeLogin = (event)=> {
    setloginEmail(event.target.value);
  }

  const handleClick = () => {
    navigate('/cart');
  };

  const handleLogin = () => {
    const storedFormData = localStorage.getItem('formData');
    const formData = JSON.parse(storedFormData);
      if(loginEmail === formData.email){
        navigate('/details/shipping');
      }else{
        alert("Please Singup first")
      }
    }
  const handleShippingClick = () => {

    const requiredFields = ['email', 'name', 'secondName', 'addressAndNumber', 'city', 'postalCode', 'province', 'countryRegion'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      alert(`Please fill in the following fields: ${missingFields.join(', ')}`);
    } else {
      localStorage.setItem('formData', JSON.stringify(formData));
      navigate('/details/shipping');
    }
  };


  return (
    <>
    {isLogin===false ? (
    <Box mt={'20px'} display={'flex'} flexDirection={'column'} width={'80%'}>
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={'5px'}>
      <Typography fontSize={'20px'} color={'#272727'} fontFamily={'Roboto'} fontWeight={'500'}>
        Contact
      </Typography>
      <Typography fontSize={'14px'} color={'#272727'} fontFamily={'Roboto'} fontWeight={'500'}>
        Do you have an account?
        <button
          style={{
            border: 'none',
            background: 'none',
            color: '#56B280',
            fontSize: '14px',
            fontFamily: 'Roboto',
            fontWeight: '500',
          }}
          onClick={()=>setisLogin(true)}
        >
          Login
        </button>
      </Typography>
    </Box>

    <Box textAlign={'left'}>
      <input
        type='text'
        placeholder='Email'
        style={{ padding: '6px', width: '100%', boxSizing: 'border-box' }}
        name='email'
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type='checkbox'
        name='check'
        style={{ border: '2px #B7B7B7 solid', margin: '10px 5px 10px 0px' }}
      />
      <label
        htmlFor='check'
        style={{ fontSize: '14px', fontFamily: 'Roboto', fontWeight: '400', boxSizing: 'border-box' }}
      >
        Add me to Candleaf newsletter for a 10% discount
      </label>
    </Box>

    <Box mt={'10px'} display={'flex'} flexDirection={'column'}>
      <Typography fontSize={'20px'} color={'#272727'} fontFamily={'Roboto'} fontWeight={'500'} textAlign={'left'}>
        Shipping Address
      </Typography>

      <Box display={'flex'} justifyContent={'space-between'} mt={'4px'}>
        <input
          type='text'
          placeholder='Name'
          style={{ padding: '6px', width: '49%', boxSizing: 'border-box' }}
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Second Name'
          style={{ padding: '6px', width: '49%', boxSizing: 'border-box' }}
          name='secondName'
          value={formData.secondName}
          onChange={handleChange}
        />
      </Box>

      <input
        type='text'
        placeholder='Address and number'
        style={{ padding: '6px', width: '100%', boxSizing: 'border-box', marginTop: '8px' }}
        name='addressAndNumber'
        value={formData.addressAndNumber}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Shipping note (optional)'
        style={{ padding: '6px', width: '100%', boxSizing: 'border-box', marginTop: '8px' }}
        name='shippingNote'
        value={formData.shippingNote}
        onChange={handleChange}
      />

      <Box display={'flex'} mt={'8px'} justifyContent={'space-between'}>
        <input
          type='text'
          placeholder='City'
          style={{ padding: '6px', width: '32%', boxSizing: 'border-box' }}
          name='city'
          value={formData.city}
          onChange={handleChange}
        />
        <input
          type='number'
          placeholder='Postal Code'
          style={{ padding: '6px', width: '32%', boxSizing: 'border-box' }}
          name='postalCode'
          value={formData.postalCode}
          onChange={handleChange}
        />
        <select
          id='province'
          name='province'
          style={{ padding: '6px', width: '32%', boxSizing: 'border-box' }}
          value={formData.province}
          onChange={handleChange}
        >
          <option value='province' style={{ display: 'none' }} selected >
            Province
          </option>
          <option value='punjab'>Punjab</option>
          <option value='sindh'>Sindh</option>
          <option value='kpk'>Khyber Pakhtunkhwa</option>
          <option value='balochistan'>Balochistan</option>
          <option value='gilgit'>Gilgit-Baltistan</option>
          <option value='ajk'>Azad Jammu and Kashmir</option>
        </select>
      </Box>
      <Box display={'flex'} mt={'8px'}>
        <select
          style={{ overflowY: 'auto', width: '100%', padding: '6px', boxSizing: 'border-box' }}
          name='countryRegion'
          value={formData.countryRegion}
          onChange={handleChange}
        >
          <option value='province' style={{ display: 'none' }} selected >
            Country
          </option>
          <option value='north'>North</option>
          <option value='south'>South</option>
          <option value='east'>East</option>
          <option value='west'>West</option>
          <option value='central'>Central</option>
          <option value='other'>Other</option>
        </select>
      </Box>
      <Box display={'flex'} mt={'10px'}>
        <input
          type='checkbox'
          name='saveInfo'
          style={{ border: '2px #B7B7B7 solid', margin: '0px 10px 0px 0px' }}
          checked={formData.saveInfo}
          onChange={handleChange}
        />
        <label
          htmlFor='saveInfo'
          style={{ fontSize: '14px', fontFamily: 'Roboto', fontWeight: '400', boxSizing: 'border-box' }}
        >
          Save this information for a future fast checkout
        </label>
      </Box>
    </Box>

    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={'5px'} mt={'20px'}>
      <Typography fontSize={'18px'} color={'#56B280'} fontFamily={'Roboto'} fontWeight={'400'}>
        <a style={{ textDecoration: 'underline' }} onClick={handleClick}>
          Back to cart
        </a>
      </Typography>

      <button
        style={{
          border: 'none',
          background: '#56B280',
          color: 'white',
          fontSize: '21px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          padding: '5px 30px 5px 30px',
          borderRadius: '4px',
        }}
        onClick={handleShippingClick}
      >
        Go to shipping
      </button>
    </Box>
  </Box>
  ): (
    <Box className='d-flex justify-content-center flex-column my-5' width={'80%'}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={'5px'}>
      <Typography fontSize={'20px'} color={'#272727'} fontFamily={'Roboto'} fontWeight={'500'}>
        Login
      </Typography>
      <Typography fontSize={'14px'} color={'#272727'} fontFamily={'Roboto'} fontWeight={'500'}>
        Signup an account?
        <button
          style={{
            border: 'none',
            background: 'none',
            color: '#56B280',
            fontSize: '14px',
            fontFamily: 'Roboto',
            fontWeight: '500',
          }}
          onClick={()=>setisLogin(false)}
        >
          SignUp
        </button>
      </Typography>

    </Box>

    <Box className='d-flex flex-column align-items-center' gap={'10px'}>
    <input
        type='text'
        placeholder='Email'
        style={{ padding: '6px', width: '100%', boxSizing: 'border-box' }}
        name='email'
        value={loginEmail}  
        onChange={handleChangeLogin}  
      />
    <button      
          style={{
          border: 'none',
          background: '#56B280',
          color: 'white',
          fontSize: '21px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          padding: '5px 30px 5px 30px',
          borderRadius: '4px',
          width:'30%'
        }} onClick={handleLogin}>
          Login In
        </button>
    </Box>
    </Box>
  )

}
  </>
  );
}
