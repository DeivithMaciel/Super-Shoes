import Header from './components/Header'
import Carousel from './components/Carousel'

import { GlobalStyle } from './globalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Carousel />
      </div>
    </>
  )
}

export default App
