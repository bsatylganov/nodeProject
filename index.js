require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const PORT = 5001
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')





const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)



// ======= Error Handler ========= \\
app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Server started on ${PORT} port`);
        })
    }catch(e){ 
        console.log(e);
    }
}

start()
