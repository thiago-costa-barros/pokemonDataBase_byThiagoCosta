

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MenuNav } from './components/MenuNav'
import { UpCircleFilled } from '@ant-design/icons'
import { Link } from 'react-scroll'
import { HomePage } from './pages/HomePage'
import { PokedexPage } from './pages/PokedexPage'
import { PokemonPage } from './pages/PokemonPage'

function App() {
  // const navigate = useNavigate() para next e preview pokemon
  return (
    <BrowserRouter>
      <header id='start'>
        <MenuNav />
        <div style={{
          position: 'fixed',
          bottom: '0',
          right: '0',
          margin: '30px'
        }}>
          <Link to="start" smooth={true} duration={750}><UpCircleFilled style={{ cursor: 'pointer', fontSize: '45px', color: '#010401' }} /></Link>
        </div>
      </header>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokedex" element={<PokedexPage />} />
          <Route path="/pokemon/:id" element={<PokemonPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
