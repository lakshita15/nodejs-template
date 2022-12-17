const express = require("express")
const app = express();

const port = 3000;

//static files
app.use(express.static('public'));
// Specific folder example
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))


//set views 
app.set('views' , './views')
app.set('view engine' , 'ejs')

app.get('', (req,res)=>{
    res.render('index', {text:"hi ejs"})
})

app.get('/about', (req,res)=>{
    res.render('about', {text:"hi ejs"})
})





app.listen(port , ()=> console.log(`listening on port ${port}`));