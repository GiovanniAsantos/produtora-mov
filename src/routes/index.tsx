// src/services/routes/Routes.tsx
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import routesConfig from './routesConfig'

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      {routesConfig.map(route => (
        <Route key={route.title} path={route.path} element={route.element} />
      ))}
    </Routes>
  </Router>
)

export default AppRoutes
