const express = require('express');
const app = express();
const path = require('path');
const hbs=require('hbs');
const port = process.env.PORT || 3000

const statPath = path.join(__dirname, '../public');
const tempPath = path.join(__dirname, '../template/views');
const partPath = path.join(__dirname, '../template/partials'); 


app.set('view engine', 'hbs');
app.set('views',tempPath);
hbs.registerPartials(partPath);

app.use(express.static(statPath));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/weather', (req, res) => {
    res.render('weather');
})

app.get('*', (req, res) => {
    res.render('404error',{
        errorMsg:'Opps! Page Not Found'
    });
})

app.listen(port, () => {
    console.log(`listening to the port ${port}`)
})