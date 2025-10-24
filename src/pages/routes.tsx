import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ShoesList from './ShoesList'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shoes/:name" element={<ShoesList />} />
  </Routes>
)

export default Rotas
