const express=require('express');
const newsRouter=express.Router();
const axios=require('axios');

newsRouter.get('',async(req,res)=>{
    //  res.render('news');
    try {
       
        const newsAPI=await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=
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

