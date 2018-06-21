import React  from 'react'
import ReactDOM  from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers'
import App from './App'

const store =  createStore(reducer)
ReactDOM.render(
    <div className='box'>
         <Provider store={store}>
        <App></App>
        </Provider>
    </div>,
    document.getElementById('app')

)
