import { GlobalStyle } from './globalStyle'
import { Provider } from 'react-redux'

import Header from './components/Header'
import Carousel from './components/Carousel'
import Aside from './components/Aside'

import { store } from './Redux/store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Aside />
      <div className="container">
        <Header />
        <Carousel />
      </div>
    </Provider>
  )
}

export default App
