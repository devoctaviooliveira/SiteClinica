import React from 'react'
import ReactDOM from 'react-dom/client'
import  theme  from './styles/theme.js'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'

// 1 - Configurando router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "tratamentosfaciais",
    element: <FacialTreatments />
  },
  {
    path: "avaliacoes",
    element: <Rates />
  }
])

import { Header } from './components/Header/index.jsx'
import { FacialTreatments } from './pages/Treatments/Facial/index.jsx'
import { Footer } from './components/Footer/index.jsx'
import { About } from './pages/About/index.jsx'
import { Homepage } from './pages/Homepage/index.jsx'
import { Slider } from './components/Slider/index.jsx'
import { CardList } from './components/Cards/cardList.jsx'
import { Card } from './components/Cards/index.jsx'
import { GoogleCard } from './components/GoogleCard/index.jsx'
import { Rates } from './pages/Rates/index.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)

