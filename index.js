const express = require("express");
const app = express();


const productsRouter = require('./routers/products')
const usersRouter = require('./routers/users')

app.get('/', (req,res)=>{
    res.send("get /path")
})

app.use('/products', productsRouter)
app.use('/users', usersRouter)



app.listen(3000, () => console.log("Server is running PORT:3000"));
