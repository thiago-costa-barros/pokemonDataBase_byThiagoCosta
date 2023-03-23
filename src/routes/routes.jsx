import { Route, Routes } from "react-router";
import { HomePage } from '../pages/HomePage'
import { PokedexPage } from '../pages/PokedexPage'
import { PokemonPage } from '../pages/PokemonPage'
import { Gen1 } from "../pages/generations/Gen1";
import { Gen2 } from "../pages/generations/Gen2";

export function RoutesComponent() {
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/pokedex" element={<PokedexPage />} />
    <Route path="/pokemon/:id" element={<PokemonPage />} />
    <Route path="/generation1" element={<Gen1 />} />
    <Route path="/generation2" element={<Gen2 />} />
  </Routes>
}