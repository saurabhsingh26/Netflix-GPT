import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';

import { Login, Browse } from "../pages";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../Redux/slices/userSlice';

const App = () => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;