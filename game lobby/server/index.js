const express = require('express')
const app = express()
app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('herro berro uwu :3')
// })

app.listen(3100, () => {
  console.log('listening on port 3100')
})

// user route
const userRouter = require('./routes/user')
app.use('/user', userRouter)
