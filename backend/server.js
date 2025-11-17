const express = require('express')
const userRouter = require('./routes/user')
const categoryRouter = require('./routes/category')

const app = express()

app.use(express.json())
app.use('/user',userRouter)
app.use('/category',categoryRouter)

app.listen(4000, 'localhost', () => {
    console.log('Server started at port 4000')
})