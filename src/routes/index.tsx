// src/services/routes/Routes.tsx
import React from 'react'
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import routesConfig from './routesConfig'

const AppRoutes: React.FC = () => (
  <BrowserRouter>
      <Router>
    <Routes>
      {routesConfig.map(route => (
        <Route key={route.title} path={route.path} element={route.element} />
      ))}
    </Routes>
  </Router>
  </BrowserRouter>

)

export default AppRoutes
