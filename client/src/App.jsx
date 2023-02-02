import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login } from './containers/Public'
import Header from './containers/components/Header'
import Navi from './containers/components/Navi'

function App() {
  return (
    <Router>
      <div className='h-screen w-screen bg-primary text-[14px]'>
        <Header />
        <Navi />
        <main className='w-1100 mx-auto my-2.5'>
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
