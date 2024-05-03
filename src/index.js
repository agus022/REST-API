const express = require ('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//router
app.use(require('./routers/index'));

app.listen(4000);
console.log(' >>> Server on port 4K <<<')
