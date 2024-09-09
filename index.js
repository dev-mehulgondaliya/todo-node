const express = require('express')
const app = express();
const cors = require('cors')
app.use(express.json())
require('./config/dbconfig')

const corsOption = {
    origin: '*',
    method: ['PUT','POST','GET','DELETE']
}
app.use(cors(corsOption))

const allRoutes = require('./routes/index')

app.use('/', allRoutes)


const port = 4848
app.listen(port,()=>{
    console.log(`your app is running port ${port}`)
})