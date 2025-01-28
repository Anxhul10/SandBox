import { Document } from "mongoose";

export interface Itodo extends Document{
    title:string,
    description:string,
    id:number
}