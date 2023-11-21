import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './state/store'

import './index.css'


const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container!)

root.render(
  <Provider store={store}>

  </Provider>
)
