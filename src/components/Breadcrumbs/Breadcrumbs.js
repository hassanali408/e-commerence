import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function CustomSeparator() {
  const navigate = useNavigate();

  const handleClick = (event, path, state) => {
    event.preventDefault();
    navigate(path, { state });
  };

  const breadcrumbs = [
    { label: 'Cart', path: '/cart' },
    { label: 'Details', path: '/details' },
    { label: 'Shipping', path: '/details/shipping' },
    {
      label: 'Payment',
      path: '/details/shipping/payment',
      children: [
        { label: 'Thanks', path: '/details/shipping/payment/thanks' },
      ],
    },
  ];

  const currentPath = window.location.pathname;

  const findActiveIndex = () => {
    for (let i = 0; i < breadcrumbs.length; i++) {
      const breadcrumb = breadcrumbs[i];
      if (currentPath === breadcrumb.path || currentPath.startsWith(`${breadcrumb.path}/${breadcrumb.path}`)) {
        return i;
      }
    }
    return -1;
  };

  const activeIndex = findActiveIndex();

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => (
          <Link
            key={index}
            underline="hover"
            color={
              index === activeIndex ? 'inherit' :
                index < activeIndex ? '#56B280' :
                'inherit'
            }
            href={breadcrumb.path}
            onClick={(event) => handleClick(event, breadcrumb.path)}
            sx={{
              fontWeight: index === activeIndex ? 'bold' :
                index < activeIndex ? 'bold' :
                'normal',
            }}
          >
            {breadcrumb.label}
          </Link>
        ))}
      </Breadcrumbs>
    </Stack>
  );
}
