import express,{Express, Application, Request, Response} from 'express'

const app : Application = express();
const port = 2000;
// middleware
app.use(express.json());
interface Obj{
    title:String,
    description:String,
    id:number
}
let todo: Array<Obj> = []// array of object
interface Obj{
    title:String,
    description:String,
    id:number
}

let idGlobal : number = 0;
app.get('/todo',(req:Request, res:Response)=>{
    if(todo.length == 0) {
        res.send({message:"todo is empty"});
    }
    else{
        res.send(todo)
    }
})

// add todo
app.post('/todo',(req:Request, res:Response)=>{
    const temp = req.body;
    temp.id = idGlobal++;

    
    todo.push(temp)
    res.send({message:"todo added!!"})
})

app.put('/todo/:Id', (req:Request, res:Response)=>{
    const strId = req.params.Id;
    const id = parseInt(strId);
    let temp = req.body;
    if(id != null){
        for(let i = 0 ; i < todo.length ; i++){
            if(todo[i].id == id){
                temp.id = id;
                todo[i] = temp;
                res.send({message:"todo added successfully", data:temp})
            }
        }
    }
    else{
        res.send({message:"check id "})
    }
})

app.listen((port), ()=>{
    console.log(`server fire at http://localhost:${port}`)
})
