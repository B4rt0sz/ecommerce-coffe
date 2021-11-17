import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'
import ScrollToTop from './hooks/ScrollToTop'
import './styles/index.scss'

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <Route path='/' component={App} />
  </Router>,
  document.getElementById('root')
)
