import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MenuNav } from './components/MenuNav'
import './App.css'
import { Link } from 'react-scroll'
import { UpCircleFilled } from '@ant-design/icons'
import { RoutesComponent } from './routes/routes'
import { HomePage } from './pages/HomePage'
import { PokedexPage } from './pages/PokedexPage'
import { PokemonPage } from './pages/PokemonPage'
import { Gen1 } from './pages/generations/Gen1'
import { Gen2 } from './pages/generations/Gen2'
import { Gen3 } from './pages/generations/Gen3'
import { Gen4 } from './pages/generations/Gen4'
import { Gen5 } from './pages/generations/Gen5'
import { Gen6 } from './pages/generations/Gen6'
import { Gen7 } from './pages/generations/Gen7'
import { Gen8 } from './pages/generations/Gen8'
import { Gen9 } from './pages/generations/Gen9'

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
          <Route path="/generation1" element={<Gen1 />} />
          <Route path="/generation2" element={<Gen2 />} />
          <Route path="/generation3" element={<Gen3 />} />
          <Route path="/generation4" element={<Gen4 />} />
          <Route path="/generation5" element={<Gen5 />} />
          <Route path="/generation6" element={<Gen6 />} />
          <Route path="/generation7" element={<Gen7 />} />
          <Route path="/generation8" element={<Gen8 />} />
          <Route path="/generation9" element={<Gen9 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
