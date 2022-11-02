var express = require('express');
var app = express();

app.use(express.static("public"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.urlencoded());

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

app.post('/save-contact',(req,res)=>{
    let name = req.body.txtName;
    let email = req.body.txtEmail;
    let number = req.body.txtNumber;
    let output = `${name}, ${email}, ${number} \n`;
    let fs = require('fs');
    
    fs.appendFileSync('./public/docs/contacts.txt', output);
    res.render('pages/home');
})

app.listen(8080,()=>{
console.log('server started');
});