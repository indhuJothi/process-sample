
const express= require('express');
const app= express();
const dotenv = require('dotenv');
dotenv.config();
app.get('/',(req,res)=>{
    res.send('Hello world!')
})
const port = process.env.PORT;
const server = app.listen(`${port}`,()=>console.log(`server started at ${port}...`))

process.on('SIGTERM',()=>{
    server.close(()=>{
        console.log('process terminated..')
    })
})

