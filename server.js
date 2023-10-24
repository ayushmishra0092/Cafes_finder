const express = require("express");
const app = express();
const path = require('path');
const Cafe= require('./models/cafes');
const ejsMate  = require('ejs-mate');
const override = require('method-override');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/cafes',{useNewUrlParser: true, useUnifiedTopology:true})
.then(data=>{
    console.log("Mongoose is Connected");
})
.catch(()=>{
    console.log("Error Connecting to Mongoose");
})

app.engine('ejs', ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// app.use(express.urlencoded({extended : true}));

app.use(express.urlencoded({extended : true}));
app.use(override('_method'));

app.get('/cafes',async (req,res)=>{
  const data= await Cafe.find({});
// console.log(data);
    res.render('home.ejs',{data});
});

app.get('/cafes/show/:id',async (req,res)=>{
    const cafe = await Cafe.findById(req.params.id);
    res.render('show.ejs',{cafe});
 })

app.get('/cafes/edit/:id',async (req,res)=>{
    const cafe = await Cafe.findById(req.params.id);
    res.render('edit.ejs',{cafe});
 })

app.get('/cafes/newform', (req,res)=>{
    res.render('newform.ejs');
});

app.put('/cafes/update/:id',async (req,res)=>{
    const {id} = req.params;
    const update = await Cafe.findByIdAndUpdate(id,{...req.body.cafe});
    console.log(req.body.cafe);
    res.redirect('/cafes');
    
});

app.post('/cafes',async(req,res)=>{
    const data = new Cafe(req.body.cafe);
    await data.save();
    // console.log(data);
    res.redirect('/cafes');
    // console.log(req.body);
    // res.send(req.body);
});

app.delete('/cafes/delete/:id', async (req,res)=>{
    const {id} = req.params;
    await Cafe.findByIdAndDelete(id);
    res.redirect('/cafes');
});

app.listen(3000,()=>{
    console.log('Listening on port 3000');
});