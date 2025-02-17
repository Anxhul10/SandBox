import React from 'react';
import {TodoCollection} from '../api/TodoCollection'
import {Todo} from "/imports/ui/Todo";
import { useTracker } from 'meteor/react-meteor-data';
export const ListTodo = ()=>{
    const {data, isLoading} = useTracker(()=>{
        const handle = Meteor.subscribe('todo');
        return {
            isLoading: !handle.ready(),
            data:TodoCollection.find().fetch()
        }
    })
    return <>
        {data.map((item, idx)=>{
            return <div>
                <input type="checkbox" value="coding" />
                <label >{item.title}</label>
        </div>
        })}
    </>
}
