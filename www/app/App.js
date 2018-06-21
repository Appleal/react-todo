import React from 'react'
import {connect} from 'react-redux'
import TodoHd from './components/TodoHd'
import TodoBd from './components/TodoBd'
import TodoFt from './components/TodoFt'

 class App extends React.Component {
    constructor() {
        super()
    }
    
  render() {
    return (
      <div >
         <TodoHd></TodoHd>
         <TodoBd></TodoBd>
         <TodoFt></TodoFt>
      </div>
    )
  }
}
export default connect(
    
)(App)