import React from 'react';
import {Form} from './Form'
import {FormList} from './FormList'
import {Header} from './Header'

export const App = () => (
  <div>
      <Header />
    <Form></Form>
      <br></br>
      <h1>
          Users info!!
      </h1>
    <FormList></FormList>
  </div>
);
