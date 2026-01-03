import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List'
import Navbar from './components/Navbar'
import Games from './pages/Games'

function Router() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/List" element={<List />} />
            <Route path='/Games' element={<Games />} />
        </Routes>
    </div>
  )
}

export default Router