import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

import App from './App'
import ScrollToTop from './hooks/ScrollToTop'
import './styles/index.scss'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop />
      <Route path='/' component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
