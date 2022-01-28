const express = require('express');
const path = require('path');
const app = express();
const bodyparse = require('body-parser');

//exportar metodos de otros archivos
const router = require('./routes/index');

//settings
//para poder asignar variables en express
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use((req,res,next) => {
    console.log(`${req.url} - ${req.method}`);
    next();
});

app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended: false}));


//routes

app.use(router);

//static_files
app.use(express.static(path.join(__dirname, 'public')));




app.listen(app.get('port'), () => {
    console.log('Server on port ' , app.set('port'))
} )