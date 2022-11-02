var express = require('express');
var app = express();

app.use(express.static("public"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
res.render('pages/home');
});

app.get('/about',(req,res)=>{
res.render('pages/about');
});

app.get('/projects',(req,res)=>{
res.render('pages/projects');
});

app.get('/contact',(req,res)=>{
res.render('pages/contact');
});

app.get('/download-resume',(req,res)=>{
res.download("./public/docs/Jeandre_Lotter_CV.pdf")
});

app.listen(8080,()=>{
console.log('server started');
});