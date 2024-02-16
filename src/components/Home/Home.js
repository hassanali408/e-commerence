import React, { useEffect, useState } from 'react';
import bgImage from '../img/bgImage.png';
import { Avatar, Box, Card, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setproductData } from '../Redux/chatSlice';
import image1 from '../img/image1.png';
import image2 from '../img/image2.png';
import image3 from '../img/image3.png';
import image4 from '../img/image4.png';
import image5 from '../img/image5.png';
import image6 from '../img/image6.png';
import image7 from '../img/image7.png';
import image8 from '../img/image8.png';
import image9 from '../img/image9.png';

import {
  Wrapper,
  CardBg,
  ProductShow,
  ProductText,
  StyledCard,
  StyledButton,
  DetailProduct,
  Icon,
  ListStyle,
  ListItem,

} from './homeStyled';

const products = [
  {
    id: 1,
    title: 'Spiced Mint',
    description: 'A refreshing blend of spiced mint for a delightful experience.',
    price: 19.99,
    image: image1,
    inventory: 1,
  },
  {
    id: 2,
    title: 'Sweet Strawberry',
    description: 'Indulge in the sweetness of ripe strawberries with this delightful flavor.',
    price: 24.99,
    image: image2,
    inventory: 1,
  },
  {
    id: 3,
    title: 'Cool Blueberries',
    description: 'Experience the cool and refreshing taste of blueberries in every sip.',
    price: 19.99,
    image: image3,
    inventory: 1,
  },
  {
    id: 4,
    title: 'Juicy Lemon',
    description: 'Savor the juiciness of lemons with this zesty and invigorating flavor.',
    price: 24.99,
    image: image4,
    inventory: 1,
  },
  {
    id: 5,
    title: 'Clean Mint',
    description: 'Enjoy the clean and crisp taste of mint for a soothing and fresh sensation.',
    price: 19.99,
    image: image5,
    inventory: 1,
  },
  {
    id: 6,
    title: 'Fragrant Cinnamon',
    description: 'Immerse yourself in the rich and fragrant aroma of cinnamon with this unique flavor.',
    price: 24.99,
    image: image6,
    inventory: 1,
  },
  {
    id: 7,
    title: 'Summer Cherries',
    description: 'Celebrate the flavors of summer with the sweetness of ripe cherries.',
    price: 19.99,
    image: image7,
    inventory: 1,
  },
  {
    id: 8,
    title: 'Clean Lavender',
    description: 'Experience the calming and clean essence of lavender in this exquisite flavor.',
    price: 24.99,
    image: image8,
    inventory: 1,
  },
];

const cardData = [
  { avatarSrc: 'https://via.placeholder.com/50', rating: 4.5, review: '“I love it! No more air fresheners”', name: 'Luisa' },
  { avatarSrc: 'https://via.placeholder.com/50', rating: 4.0, review: '“Reccomended for everyone”', name: 'Edoardo' },
  { avatarSrc: 'https://via.placeholder.com/50', rating: 5.0, review: '“Looks very natural, the smell is awesome”', name: 'Mart' },
];

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const handleCardClick = (product) => {
    dispatch(setproductData(null));
    dispatch(setproductData(product));
    navigate('./product');
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, cardData.length]);

  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.clear();
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 650);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('unload', clearLocalStorage);
    return () => {
      window.removeEventListener('unload', clearLocalStorage);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Wrapper>
        <img src={bgImage} className='img-fluid' alt="background" />
        <CardBg>
          <Icon>🌱</Icon>
          <Typography className='fw-bold' sx={{ fontSize: { xs: '0.7rem', sm: '1rem', md: '1.8rem', xl: '2.5rem' } }}>
            The Nature Candle
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.5rem', sm: '0.8rem', md: '1.3rem', xl: '1.8rem' }, width: '90%' }}>
            All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments.
          </Typography>
          <Typography className='btn btn-success' sx={{ fontSize: { xs: '0.4rem', sm: '0.8rem', md: '1.3rem', xl: '1.8rem' } }} >
            Discover Our Collection
          </Typography>
        </CardBg>
      </Wrapper>

      <ProductShow>
        <ProductText>
          <Typography className='fw-bold' sx={{ fontSize: '40px' }}>
            Products
          </Typography >
          <Typography sx={{ fontSize: '18px', fontStyle: 'italic' }}>
            Order for yourself or your loved ones
          </Typography >
        </ProductText>

        <Box className='d-flex justify-content-center flex-wrap mt-2'>
          {products.map((product) => (
            <Box key={product.id} className='mx-2 my-1' onClick={() => handleCardClick(product)}>
              <StyledCard >
                <CardMedia component='img' height='160' image={product.image} alt={product.title} className='bg-light' />
                <CardContent>
                  <Typography component='div'>{product.title}</Typography>
                  <Typography variant='body2' color='#56B280' className='fw-bold'>
                    {product.price}
                  </Typography >
                </CardContent>
              </StyledCard>
            </Box>
          ))}
        </Box>
      </ProductShow>

      <DetailProduct>
        <Box sx={{ width: '50%' }}>
          <Typography sx={{ color: '#1D252C', fontSize: { xs: '0.8rem', sm: '1.2rem', md: '1.8rem', xl: '2.5rem' }, fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>
            Clean and Fragrant Soy Wax
          </Typography>
          <Typography sx={{ color: '#56B280', fontSize: { xs: '0.6rem', sm: '0.8rem', md: '1rem', xl: '1.3rem' }, textAlign: 'left', marginBottom: '20px' }}>
            Made for your home and your wellness
          </Typography>
          <ListStyle>
            <ListItem>&#10004; <b>Eco-sustainable:</b> All recyclable materials, 0% CO2 emissions</ListItem>
            <ListItem>&#10004; <b>Hyphoallergenic:</b> 100% natural, human-friendly ingredients</ListItem>
            <ListItem>&#10004; <b>Handmade:</b> All candles are craftily made with love.</ListItem>
            <ListItem>&#10004; <b>Long burning:</b> No more waste. Created to last long.</ListItem>
            <ListItem>
              <StyledButton>
                <button>Learn More</button>
              </StyledButton>
            </ListItem>
          </ListStyle>
        </Box>
        <Box sx={{ width: '40%' }}>
          <img src={image9} className='img-fluid' alt="product" />
        </Box>
      </DetailProduct>

      <Box height={'400px'} className='d-flex justify-content-center' sx={{ backgroundColor: '#eef7f2' }}>
        <Box width={'80%'} sx={{ margin: '50px 0px' }}>
          <Typography color={'#0B254B'} fontSize={'35px'} fontWeight={'bold'}>
            Testimonials
          </Typography >
          <Typography color={'#0B254B'} fontSize={'16px'}>
            Some quotes from our happy customers
          </Typography >

          <Box className='d-flex justify-content-center' marginTop={'30px'}>
  {isMobile ? (

      cardData.map((card, index) => (
        <Card key={index} style={{ margin: '0 8px', width: '160px', display: index === activeIndex ? 'block' : 'none' }}>
          <Box display="flex" alignItems="center" padding={2} flexDirection={'column'}>
            <Avatar alt="Avatar" src={card.avatarSrc} />
            <Rating value={card.rating} precision={0.5} size="small" readOnly />
            <Typography fontSize={'15px'} color={'#1D293F'} fontWeight={'bold'}>
              {card.review}
            </Typography>
            <Typography color={'#7C8087'} fontSize={'14px'} fontWeight={'bold'}>
              {card.name}
            </Typography>
          </Box>
        </Card>
  
))

  ) : (
    cardData.map((card, index) => (
      <Card key={index} style={{ margin: '0 8px', width: '18vw' }}>
        <Box display="flex" alignItems="center" padding={2} flexDirection={'column'}>
          <Avatar alt="Avatar" src={card.avatarSrc} />
          <Rating value={card.rating} precision={0.5} size="small" readOnly />
          <Typography fontSize={'15px'} color={'#1D293F'} fontWeight={'bold'}>
            {card.review}
          </Typography>
          <Typography color={'#7C8087'} fontSize={'14px'} fontWeight={'bold'}>
            {card.name}
          </Typography>
        </Box>
      </Card>
    ))
  )}
</Box>

        </Box>
      </Box>

      <ProductShow>
        <ProductText>
          <Typography className='fw-bold' sx={{ fontSize: '40px' }}>
            Popular
          </Typography >
          <Typography sx={{ fontSize: '18px', fontStyle: 'italic' }}>
            Our top-selling product that you may like
          </Typography >
        </ProductText>

        <Box className='productCard d-flex justify-content-center flex-wrap'>
          {products.slice(0, 4).map((product) => (
            <StyledCard key={product.id} className='mx-2'>
              <CardMedia component='img' height='120' image={product.image} alt={product.title} className='bg-light' />
              <CardContent>
                <Typography component='div'>{product.title}</Typography>
                <Typography variant='body2' color='#56B280' className='fw-bold'>
                  {product.price}
                </Typography >
              </CardContent>
            </StyledCard>
          ))}
        </Box>
      </ProductShow>

      <Footer />
    </>
  );
}
