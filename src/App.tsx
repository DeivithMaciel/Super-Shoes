import Carousel from './components/Carousel'

import logo from './Assets/images/super-shoes.png'

import { GlobalStyle } from './globalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <div>
          <img src={logo} alt="Super Shoes logo" />
        </div>
        <Carousel />
      </div>
    </>
  )
}

export default App
