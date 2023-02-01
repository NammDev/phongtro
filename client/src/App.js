import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login } from './containers/Public'

function App() {
  return (
    <Router>
      <div className='h-screen w-screen bg-primary'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
