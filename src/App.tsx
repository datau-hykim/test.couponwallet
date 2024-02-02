import { RouterProvider } from 'react-router-dom'
import { router } from 'src/router'
import RouterLoaderLoading from 'src/router/RouteLoaderLoading'
import React from 'react'

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} fallbackElement={<RouterLoaderLoading />} />
    </div>
  )
}

export default App
