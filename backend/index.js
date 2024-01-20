require('dotenv').config()
const express = require('express')
const app = express()
require('./db/connection')
const cors = require('cors');
app.use(cors());   //used when FE and BE are running on different ports and are used to connect them

const bodyParser = require('body-parser')

const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})



//At first import from RoutePAge then use in middleware
const createUser = require('./routes/UserRoute')
const displaydata = require('./routes/DisplayDataRoute')
const item = require('./routes/ItemRoute')
const orderRoute = require('./routes/OrderRoute')



//middleware routes
app.use(bodyParser.json())
app.use('/public/uploads', express.static('public/uploads'))
app.use('/api', createUser)
app.use('/api', displaydata)
app.use('/api', item)
app.use('/api', orderRoute)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})