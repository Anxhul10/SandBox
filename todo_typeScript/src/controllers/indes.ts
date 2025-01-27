import { Itodo } from "../types/todo";
import { Request, Response } from "express";

// retrive data and send to the client
import { todoData } from "../database/todoData";

const getTodo = (req:Request, res:Response) => {
    if(todoData.length == 0){
        res.send({messgae:"empty todo"})
    }
    else{
        res.send({todos:todoData})
    }
}

export default getTodo;