import React from 'react'
import {useState, useEffect} from 'react'
import {FormCollection} from '../api/FormCollection'
// want to show the changes to the client
export const Form = ()=>{
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const saveContact = (e)=>{
        e.preventDefault();
        console.log({name,email});
        FormCollection.insert({name,email})
        setName('')
        setEmail('')
    }
    return <>
    <form>
      <div>
        <label >Name-</label>
        <input type='text' id='name' value={name} onChange={(e)=>{
            setName(e.target.value)
        }}></input>
      </div>
      <div>
        <label>email-</label>
        <input type='text' id='email' value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }}></input>
      </div>
      <div>
        <button id='button' onClick={
            saveContact
        }>
          submit
        </button>
      </div>
    </form>
    </>
};
