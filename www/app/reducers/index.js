
const initObj={
   'todos':[
       {"id":1,"title":"吃饭","done":false},
       {"id":2,"title":"睡觉","done":true},
       {"id":3,"title":"看书","done":false},
   ],
   show:'ALL'
}

export default (state = initObj,action)=>{
    if(action.type=='ADDTITLE'){
        return{
          ...state,
        'todos':[
            ...state.todos,
            {
             'id':state.todos.reduce((a,b)=>{
                return b.id>a?b.id:a.id
            },0)+1,
            'title':action.title,
            'done':false
        }
        ]}
    }else if(action.type=='DELTODO'){
        return{
         ...state,
        'todos':state.todos.filter((item)=>{return item.id!=action.id})
    }
}else if(action.type=='CHANGETODO'){
    return {
        ...state,
        'todos':state.todos.map(item=>{
    
            if(item.id!=action.id) return item
            return{
                ...item,
               [action.k]:action.v
            }
        })
    }
}else if(action.type=='CHANGESHOW'){
    return{
        ...state,
        show:action.show
    }
}
    return state
}