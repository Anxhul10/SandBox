import express,{Express, Response, Request, Application} from 'express'

const app : Application= express();
const port = 7000;

app.get('/',(req:Request, res:Response)=>{
    res.send("hello from server")
})
app.listen((port),()=>{
    console.log(`server is fire at http://localhost:${port}`)
})