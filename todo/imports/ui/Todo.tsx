import React, {useState} from 'react'
import {TodoCollection, Todo} from "/imports/api/TodoCollection";
import {Meteor} from "meteor/meteor"
export const Todo = ()=>{
    const [title, setTitle] = useState<string>('');

    const saveTodo =()=>{
        console.log(title);
        TodoCollection.insert({title});
    }

    return <>
        <div>
            <label>enter todos</label>
            <input type='text' onChange={(e)=>{
                setTitle(e.target.value);
            }}></input>
            <button onClick={saveTodo}>submit</button>
        </div>
    </>
}
