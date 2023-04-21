import express from 'express';

const app =express();

app.get("/",(request, response)=>{
    return response.json({message: "Esse é meu servidor"})
})

app.listen(3333);