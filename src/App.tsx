import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store'
import Aside from './components/Aside'

import { GlobalStyle } from './globalStyle'
import Rotas from './pages/routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Aside />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
