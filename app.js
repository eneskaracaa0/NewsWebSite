const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const port=3000;



//statix files
app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/img',express.static(__dirname + 'public/img'));
app.use('/js',express.static(__dirname + 'public/js'));

//parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));



//templating engine 
 app.set('views','./src/views');
app.set('view engine','ejs');

//Routes
const newsRouter=require('./src/routes/news');

app.use('/',newsRouter);



//listen on port 5000
app.listen(port,()=>{
    console.log('listenin on port 3000');
})