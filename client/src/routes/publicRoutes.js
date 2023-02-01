import HeaderOnly from '../layouts/HeaderLayout/HeaderLayout'
import { Home, Login } from '../containers/Public'

// Don't Need Login
const publicRoutes = [
  { path: '', component: Home, layout: HeaderOnly },
  { path: '/login', component: Login, layout: HeaderOnly },
]

export default publicRoutes
