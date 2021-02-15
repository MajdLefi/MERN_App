const express = require ("express")
const app = express()
const authRouter = require ('./routes/auth')
const bootcampRoutes = require('./routes/bootcamp')

const test = require('./test')
app.use('/test',test
)

app.use(express.json());

//connect DB
const connectDB = require ('./config/connectDB')
connectDB()

//port
const port = process.env.PORT || 2000

//use the routes
app.use('/api/auth',authRouter);
app.use('/',bootcampRoutes)

app.listen(port, (error) =>
    error
        ? console.log(error)
        : console.log(`The server is running on port ${port}`)
)