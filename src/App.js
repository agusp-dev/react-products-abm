import { Header } from './components'
import { Products, AddProduct, EditProduct } from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//redux
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Router>
      <Provider store={ store }>
        <Header />
        <div className='container mt-5'>
          <Switch>
            <Route exact path='/' component={ Products } />
            <Route exact path='/products/add' component={ AddProduct } />
            <Route exact path='/products/edit/:id' component={ EditProduct } />
          </Switch>
        </div>
      </Provider>
    </Router>
  )
}

export default App;
