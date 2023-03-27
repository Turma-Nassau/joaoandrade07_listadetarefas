const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const fs = require('fs')
var PORT = 8000;

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true,
}))

app.get('/', (req, res, next) => {
    res.json({
        info: `API root OK`
    })
})

app.listen(PORT, () => {
    console.log(`Rodando na Porta ${PORT}.`)
})


function logger(request, response, next) {
    let log = `${new Date()}, ${request.method}, ${request.url}, ${request.body} \n`;
    fs.appendFile('./LOGGING.log', log, (err) => {
        if (err) throw err;
        console.log(log)
    })
    next()
}

app.use(logger)

