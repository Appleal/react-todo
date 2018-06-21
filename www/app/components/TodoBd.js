import React from 'react'
import {connect} from 'react-redux'
import TodoItem from './TodoItem.js'

 class TodoBd extends React.Component {
   constructor() {
       super()
   }
  
  render() {
      if(this.props.show=='ALL'){
          var todos = this.props.todos
      }else if(this.props.show=='FINISHED'){
          var todos = this.props.todos.filter(item=>item.done)
      }else if(this.props.show=='UNFINISH'){
        var todos = this.props.todos.filter(item=>!item.done)
    }
    return (
      <div className='body'>
       {
           todos.map((item)=>{
             return <TodoItem 
              key={item.id}
              item={item}
              delTodo = {this.props.delTodo.bind(this)}
              changeTodo={this.props.changeTodo.bind(this)}
              ></TodoItem>
           })
       }
      </div>
    )
  }
}
export default connect(
    (state)=>{
       return {todos:state.todos,show:state.show}
    },
    (dispatch)=>{
       return{
           delTodo(id){
               dispatch({'type':'DELTODO',id})
           },
           changeTodo(id,k,v){
               dispatch({'type':'CHANGETODO',id,k,v})
           }
       }
    }
)(TodoBd)