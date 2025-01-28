import { Itodo } from "../types/todo";
import { Request, Response } from "express";

// retrive data and send to the client
import { todoData } from "../database/todoData";
let id = 0;
const getTodo = (req:Request, res:Response) => {
    if(todoData.length == 0){
        res.send({messgae:"empty todo"})
    }
    else{
        res.send({todos:todoData})
    }
}

// add todo
const addTodo = (req:Request, res:Response) =>{
    const data = req.body;
    data['id']=id++;
    todoData.push(data);
    res.send({message:"todo added sucessfully"});
}
// update todo
const updateTodo = (req:Request, res:Response)=>{
    const id:number = req.params.id;
    let flag : number = 0;
    for(let i = 0 ; i < todoData.length ; i++){
        if(todoData[i].id == id){

        }
    }
}

