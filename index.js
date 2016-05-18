import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ready from 'doc-ready'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

const start = () => {
  return (<div>
      <input />
    </div>
  )
}
const Home = () => {
  return <div>Home </div>
}
class App extends Component{
  constructor(){
    super()
    this.state = {}
  }
  render(){
    return <div>
      <div>hello</div>
      {this.props.children}
    </div>
  }
}

const Root = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
)

 ready( () => {
  let container = document.querySelector('#cnt')
  console.log(container)
  ReactDOM.render(<Root />, container)
})
