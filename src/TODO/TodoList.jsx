import { useContext } from 'react';
import deleteIcon from '../assets/icons8-delete.svg';
import classes from './todo.module.css';
import TodoContext from './TodoContext';

export default function TodoList(){
    const data = useContext(TodoContext);
    const {todos, dispatch} = data

    return(
        <div className={classes.listWrapper}>
            {todos.map(item=> {
                const {name, id} = item
                return (
                    <div className={classes.listContainer} key={id}>
                        <li >{name}</li>
                        <button type='button' onClick={(e)=> dispatch({type: 'DELETE_TASK', payload: id})}>
                            <img src={deleteIcon} alt="delete" />
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
