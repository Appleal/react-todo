import React from 'react'
import {connect} from 'react-redux'
class TodoHd extends React.Component {
    constructor() {
        super()
    }
    addTitle(){
        var titleTxt = this.refs.titleTxt.value
        this.props.addTitle(titleTxt)
        this.refs.titleTxt.value=''
    }
  render() {
    return (
      <div className='head'>
        <input type="text" ref='titleTxt'/>
        <button onClick={()=>{this.addTitle()}}
        >添加</button>
      </div>
    )
  }
}
export default connect(
    (state)=>{
        return {
            todos:state.todos
        }
    },
    (dispatch)=>{
     return {
         addTitle(title){
             dispatch({'type':"ADDTITLE",title})
         }
     }
    }
    
)(TodoHd)