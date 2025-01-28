const express = require('express')

const app = express();
const port = 2000;
app.use(express.json());
let todo = []// array of object
let id  = 0;
app.get('/todo',(req, res)=>{
    if(todo.length == 0) {
        res.send({message:"todo is empty"});
    }
    res.send(todo)
})

// add todo

app.post('/todo',(req, res)=>{
    const temp = req.body;
    console.log({temp})
    // temp.id = id++;
    // todo.push(temp)
    // res.send({message:"todo added!!"})
})

app.listen((port), ()=>{
    console.log(`server fire at http://localhost:${port}`)
})
