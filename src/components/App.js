import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import { Login, Browse } from "../pages";

const App = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;