import './App.css';
import React, {useState} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store  from "./toolkit/store";
import { persistor } from "./toolkit/store";
import { PersistGate } from "redux-persist/integration/react";
import HomePage from "./pages/home/homePage";
import ForecastPage from "./pages/forecast/forecastPage";


function App () {

  const [theme, setTheme] = useState('dark')

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage theme={theme} setTheme={setTheme}/>,
    },
    {
      path: "/forecast/:lang/:unit",
      element: <ForecastPage theme={theme}/>,
    },
  ]);

  return (
      <Provider store={store}>
        {/*<PersistGate persistor={persistor} loading={<div>...loading</div>}>*/}
          <RouterProvider router={router} />
        {/*</PersistGate>*/}
      </Provider>
  )
}

export default App;