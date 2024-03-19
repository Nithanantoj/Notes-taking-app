import React from 'react'
import Landingpage from './screens/Landingpage.jsx'
import AddNoteForm from './screens/content.jsx'
import Loginpage from './screens/Loginpage.jsx'
import SignupPage from './screens/Signuppage.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landingpage />
    },
    {
      path: '/login',
      element: <Loginpage />
    },
    {
      path: '/signup',
      element: <SignupPage />
    },
    {
      path: '/notes',
      element: <AddNoteForm />
    }
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App