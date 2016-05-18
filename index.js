import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ready from 'doc-ready'
import { Router, Route, browserHistory,　hashHistory, IndexRoute } from 'react-router'

const start = () => {
  return (<div>
      <input />
    </div>
  )
}
const Home = () => {
  return <div>Home </div>
}
const Hoge = () => {
  return <div>Hoge </div>
}

class App extends Component{
  constructor(){
    super()
    this.state = {}
  }
  render(){
    console.log(this.context)
    return <div>
      <div>hello</div>
      {this.props.children}
    </div>
  }
}

const Root = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
    </Route>
    <Route path="/hoge" component={Hoge} />
  </Router>
)

 ready( () => {
  let container = document.querySelector('#cnt')
  console.log(container)
  ReactDOM.render(<Root />, container)
})
