import { RouterProvider } from 'react-router-dom'
import { router } from 'src/router'
import RouterLoaderLoading from 'src/router/RouteLoaderLoading'
import React from 'react'
import GlobalStyles from "src/styles/GlobalStyles";

const App = () => {
  return (
    <div className="App">
        <GlobalStyles />
      <RouterProvider router={router} fallbackElement={<RouterLoaderLoading />} />
    </div>
  )
}

export default App
