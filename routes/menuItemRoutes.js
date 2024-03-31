const express=require('express')
const router=express.Router()
const MenuItem=require("./../models/MenuItem")


router.get('/',async (req,res)=>{
    try{
      const data= await MenuItem.find();
      console.log('menuitem fetched')
      res.status(200).json(data)
    }catch(err){
      console.log(err)
      res.status(500).json({error: 'internal server error'})
    }
  })

  router.get('/:tastetype',async (req,res)=>{    
    try{
      const tastetype=req.params.tastetype;       //extract the work type ffrom the url parameters
      if(tastetype=='sour'|| tastetype=='sweet' || tastetype=='spicy'){
           const response=await MenuItem.find({taste: tastetype})
           console.log("response fetched")
           res.status(200).json(response);
      }else{
        res.status(404).json({error: 'invalid taste'})
      }
    }catch(err){
      console.log(err)
      res.status(500).json({error: 'internal server error'})
    }
  })
  
  router.post('/',async (req,res)=>{
    try{
      const data=req.body
    const newmenu=new MenuItem(data)
    const response=await newmenu.save()
    console.log('data is saved')
    res.status(200).json(response)
    }catch(err){
      console.log(err)
      res.status(500).json({error: 'internal server error'})
    }
  })

  module.exports=router;