import express from "express";
const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send('GET request is working')
})
app.post('/items',(req,res)=>{
    res.send('POST Request is working')
})
app.listen(3000, ()=>{
    console.log(`Amiqa is listening on port ${port}`);
    
})
