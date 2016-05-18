import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ready from 'doc-ready'
import { Router, Route, browserHistory,　hashHistory, IndexRoute } from 'react-router'

const Page1 = () => {
  return <div>page1</div>
}

const Page2 = () => {
  return <div>page2</div>
}

const Hoge = () => {
  return <div>Hoge </div>
}

class Home extends Component{
  static get contextTypes(){ 
    return {
      router: React.PropTypes.object
    }
  }
  handleClick1(){
    console.log(this.context.router)
    this.context.router.push("/page1")
  }
  handleClick2(){
    this.context.router.push("/page2")
  }
  render(){
    return (
      <div>
        <button onClick={this.handleClick1.bind(this)}>button1</button>
        <button onClick={this.handleClick2.bind(this)}>button2</button>
      </div>
    )
  }
}
class App extends Component{
  render(){
    return <div>
      <div>This is tool</div>
      {this.props.children}
    </div>
  }
}

const Root = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
    </Route>
    <Route path="/hoge" component={Hoge} />
  </Router>
)

 ready( () => {
  let container = document.querySelector('#cnt')
  console.log(container)
  ReactDOM.render(<Root />, container)
})
