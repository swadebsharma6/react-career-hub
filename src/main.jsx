import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { HelmetProvider } from 'react-helmet-async';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import AuthProvider from './Firebase/AuthProvider';
import PrivetRoute from './Firebase/PrivetRoute/PrivetRoute';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/FeaturedJobs/JobDetails';
import Home from './components/Home/Home';
import Jobs from './components/Jobs/Jobs';
import Root from './components/Root/Root';
import Statistics from './components/Statistics/Statistics';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <PrivetRoute> <AppliedJobs></AppliedJobs></PrivetRoute>,
        loader: () => fetch('../public/jobs.json')
      },
      {
        path: '/job/:id',
        element: <PrivetRoute> <JobDetails></JobDetails></PrivetRoute>,
        loader: () => fetch('../public/jobs.json')
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/statistic',
        element: <Statistics></Statistics>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <HelmetProvider>
  <div className='max-w-screen-xl mx-auto'>
  <RouterProvider router={router} />
  </div>
  </HelmetProvider>
  </AuthProvider>
  </React.StrictMode>,
)
