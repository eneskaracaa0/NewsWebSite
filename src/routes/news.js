const express=require('express');
const newsRouter=express.Router();
const axios=require('axios');

newsRouter.get('',async(req,res)=>{
    //  res.render('news');
    try {
        // const API_KEY='2d2344d9892c4c14a4e4fcea914f9318';
        const newsAPI=await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=2d2344d9892c4c14a4e4fcea914f9318
`);
res.status(200).
 render('news',{veri:newsAPI.data});
        // console.log(newsAPI.data);
        
    } catch (err) {
        if(err.response){
            res.render('news',{veri:null})
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.header);
        }else if(err.request){
            console.log(err.request);
        }else{
            console.error('Error',err.message);
        }
        
        
        
    }
})

module.exports=newsRouter

