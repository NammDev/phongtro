import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'

function App() {
  return (
    <Router>
      <div className='h-screen w-screen bg-primary'>
        <Routes>
          {publicRoutes.map((route, i) => {
            const Layout = route.layout
            const Page = route.component
            const path = route.path
            return (
              <Route
                key={i}
                path={path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
