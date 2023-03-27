var sqlite3 = require("sqlite3");
const DB_FILE = "sb.sqlite";
let my_db = new sqlite3.Database(DB_FILE, (err) => {
    if(err){
        console.error(err);
        throw err;
    } else{
        console.log(`Conectado ao Banco de Dados ${DB_FILE}`);
    }
});

module.exports = my_db;