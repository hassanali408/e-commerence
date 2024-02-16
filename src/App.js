import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Product from './components/Product/Product';
import Navbar from './components/Home/Navbar';
import { Provider } from 'react-redux';
import store from './components/Redux/store'
import Cart from './components/Cart/Cart';
import Details from './components/Details/Details';
import Desktop from './components/Desktop/Desktop';
import Coupen from './components/Coupon/Coupon';
import Shipping from './components/Shipping/Shipping';
import Payment from './components/Payment/Payment';
import Thanks from './components/Thanks/Thanks';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
     
    ]
    },
    
    {
      path: "/details",
      element: <Desktop />,
      children: [
        {
          path: "/details",
          element: <Details />,
        },
        {
          path: "/details/shipping",
          element: <Shipping />,
        },
        {
          path:'/details/shipping/payment',
          element:<Payment />,
          children: [
            {
              path: "/details/shipping/payment/thanks",
              element: <Thanks />,
            },
          ]
        },
      ]
    },
 

    
 
  
]);
function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <RouterProvider router={router} />
          </Provider>
    </div>
  );
}

export default App;
