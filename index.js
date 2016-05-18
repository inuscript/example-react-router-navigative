import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ready from 'doc-ready'
const start = () => {
  return (<div>
      <input />
    </div>
  )
}

class App extends Component{
  constructor(){
    super()
    this.state = {}
  }
  render(){
    return <div>hello</div>
  }
}
ready( () => {
  let container = document.querySelector('#cnt')
  console.log(container)
  ReactDOM.render(<App />, container)
})
