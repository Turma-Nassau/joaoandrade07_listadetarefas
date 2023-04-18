const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const fs = require('fs')
var PORT = 8000;
const userRouter = require('./routes/user');
const collectionsRouter = require('./routes/collections')
const tasksRouter = require('./routes/tasks')
swaggerFile = require("./swagger_output.json");
swaggerUi = require("swagger-ui-express");
const db = require("./database")

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true,
}))

app.use("/api/user", userRouter);

app.use("/api/collections", collectionsRouter);

app.use("/api/tasks", tasksRouter);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerFile));

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