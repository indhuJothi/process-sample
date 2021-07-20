const express= require('express');
const app= express();

app.get('/',(req,res)=>{
    res.send('Hello world!')
})

const server = app.listen(3000,()=>console.log('server started...'))

process.on('SIGTERM',()=>{
    server.close(()=>{
        console.log('process terminated..')
    })
})

