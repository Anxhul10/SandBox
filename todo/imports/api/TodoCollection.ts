import {Mongo} from 'meteor/mongo';

export interface Todo {
    title:string;
}

export const TodoCollection = new Mongo.Collection<Todo>('todo');
