import AboutPage from '../../pages/AboutPage'
import HomePage from '../../pages/HomePage'
import { routerType } from '../routes.type'

const routesConfig: routerType[] = [
  {
    path: '/',
    element: <HomePage />,
    title: 'home'
  },
  {
    path: 'about',
    element: <AboutPage />,
    title: 'about'
  }
]

export default routesConfig
