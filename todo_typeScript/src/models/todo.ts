import {Itodo} from '../types/todo'
import {model, Schema} from 'mongoose'

const todoSchema:Schema = new Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        status:{
            type:Boolean,
            required:true
        }
    }
)

export const todoModel = model<Itodo>('todoModel', todoSchema);