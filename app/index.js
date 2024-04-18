const express = require('express')
const app = express()
const PORT  = process.env.APP_PORT ?  process.env.APP_PORT : 3000;
app.get('/', function (req, res) {
    res.send('My first CI/CD pipeline is done')
})

app.listen(PORT, ()=> {
    console.log(`Server is running http://localhost:${PORT}`)
})