import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ShoesList from './ShoesList'
import Checkout from './Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shoes/:name" element={<ShoesList />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
