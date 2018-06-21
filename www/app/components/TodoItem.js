import React from 'react'

export default class TodoItem extends React.Component {
    constructor() {
        super()
        this.state={
            OnEdit:false
        }
    }
  render() {
    const {title,id,done} = this.props.item
    return (
      <div className='todo'>
        <input type="checkbox" checked={done} onClick={(e)=>{this.props.changeTodo(id,'done',e.target.checked)}}/>
        {this.state.OnEdit
        ? 
           <input type="text" defaultValue={title} autoFocus
            onBlur={(e)=>{
               this.setState({OnEdit:false})
               this.props.changeTodo(id,'title',e.target.value)
           }}/>
        : <span onDoubleClick={()=>{this.setState({OnEdit:true})}}>{title}</span>}
       
       
        <button onClick={()=>{this.props.delTodo(id)}}>删除</button>
      </div>
    )
  }
}
