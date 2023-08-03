import { useReducer, useState } from 'react';
import TodoContext from './TodoContext';
import classes from './todo.module.css';
import TodoList from './TodoList';
function TodoApp(){

    const initialState = []
    const init = ()=> {
        return initialState
    }
    const reducer = (state, action)=> {
        switch(action.type){
            case 'ADD_TASK': 
                return [
                    ...state,
                    {id: state.length + 1, name: action.payload}
                ]
            case 'DELETE_TASK':
                return state.filter(i => i.id !== action.payload)
            case 'RESET_TASK': return init(action.payload)
            default: return state
        }
    }
    const [todos, dispatch] = useReducer(reducer, initialState, init)
    const [todoItem, setTodoItem] = useState('');
    const addTodo = ()=> {
       if(todoItem === ''){
        alert('Enter A Task')
       }else{
        setTodoItem('')
        dispatch({type: 'ADD_TASK', payload: todoItem});
       }
    }
    const clearTodo = ()=> {
        dispatch({type: 'RESET_TASK', payload: initialState})
    }

    const data = {
        todos,
        dispatch
    }

    return(
        <TodoContext.Provider value={data}>
        <section className={classes.container}>
            <div className={classes.logo}>
                <h3>TODO APP</h3>
            </div>
            <div className={classes.search}>
                <div className={classes.searchContainer}>
                    <input 
                        type="text" 
                        className={classes.input} 
                        value={todoItem}
                        onChange={(e)=> setTodoItem(e.target.value)}
                        maxLength={10}
                    />
                </div>
                <button 
                    type='button'
                    onClick={addTodo}
                >ADD</button>
                <button 
                    type='button'
                    onClick={clearTodo}
                >CLEAR</button>
            </div>
            {todos.length === 0 ? <h3 style={{marginTop: '2rem'}}>NO AVAILABLE TASK</h3> : <TodoList/>}
            
        </section>
        </TodoContext.Provider>
    )
}

export default TodoApp