/*
  Built by Maren VanDenTop and David Hanus
*/

import * as React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {
  ChakraProvider,
  ColorModeScript,
  theme,
} from "@chakra-ui/react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import Nav from "./nav"
import Form from "./pages/form"
import Calculator from "./pages/calculator"
import Api from "./pages/api"
import Pics from "./pages/pics"


const rootElement = document.getElementById("root")

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript />
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="form" element={<Form />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="api" element={<Api />} />
        <Route path="pics" element={<Pics />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
  , rootElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
