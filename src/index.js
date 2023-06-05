import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './pages/App';
import Employees from './pages/Employees'
import { createHashRouter, RouterProvider} from 'react-router-dom';


const router = createHashRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/table",
    element: <Employees />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
