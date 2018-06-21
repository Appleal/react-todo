import React from 'react'
import { connect } from "react-redux"
import classNames from 'classnames'

 class TodoFt extends React.Component {
    constructor() {
        super()
    }
  render() {
      
    return (
      <div className='footer'>
        <p>全部的事情有<span>{this.props.todos.length}</span>件</p>
        <p>已经完成<span>{this.props.todos.filter(item=>item.done).length}</span>件</p>
        <p>还未完成 <span>{this.props.todos.filter(item=>!item.done).length}</span>件</p>
        <button
        onClick = {()=>{this.props.changeShow('ALL')}}
        className = {classNames({'cur':this.props.show=='ALL'})}
        
        >查看全部</button>
        <button
        onClick = {()=>{this.props.changeShow('FINISHED')}}
        className = {classNames({'cur':this.props.show=='FINISHED'})}>查看已做</button>
        <button
        onClick = {()=>{this.props.changeShow('UNFINISH')}}
        className = {classNames({'cur':this.props.show=='UNFINISH'})}>查看未做</button>
        
      </div>
    )
  }
}
export default connect(
    (state)=>{
        return {
            todos:state.todos,
            show:state.show
        }
    },
    (dispatch)=>{
        return{
            changeShow(show){
                dispatch({'type':'CHANGESHOW',show})
            }
        }
    }
)(TodoFt)
