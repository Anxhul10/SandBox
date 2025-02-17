import React from 'react';
import {Todo} from './Todo'
import {ListTodo} from "/imports/ui/ListTodo";

export const App = () => (
  <center>
      <div>
          <h1>Enter lists!!</h1>
          <Todo></Todo>
          <h1> Todos list !!</h1>
          <ListTodo></ListTodo>
      </div>
  </center>
);
