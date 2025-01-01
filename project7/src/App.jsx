import Home from './pages/Home'
import CreateAmogus from './pages/CreateAmogus'
import Gallery from './pages/Gallery'
import EditAmogus from './pages/EditAmogus'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <Router> 
      <div className="App">
        <div className="header">
          <Link to="/"><button className="headerBtn"> Home </button></Link>
          <Link to="/create"><button className="headerBtn"> Create a Crewmate! </button></Link>
          <Link to="/gallery"><button className="headerBtn"> Crewmate Gallery </button></Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateAmogus />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/edit/:id" element={<EditAmogus />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
