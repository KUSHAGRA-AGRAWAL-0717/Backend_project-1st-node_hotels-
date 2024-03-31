const express=require("express")
const router= express.Router();
const Person = require("./../models/Person");

//post route to add a person
router.post("/", async (req, res) => {
    try{
      const data=req.body
      const newPerson=new Person(data)
      const response=await newPerson.save()
      console.log('data saved')
      res.status(200).json(response)
    }catch(err){
      console.log(err)
      res.status(500).json({error: 'internal server error'})
    }
  });


//get method to get the person 
router.get('/',async (req,res)=>{
    try{
       const data= await Person.find();
       console.log('data fetched')
       res.status(200).json(data)
    }catch(err){
      console.log(err)
      res.status(500).json({error: 'internal server error'})
    }
  })


      //paramaterized call
router.get('/:workType',async (req,res)=>{    
    try{
      const workType=req.params.workType;       //extract the work type ffrom the url parameters
      if(workType=='chef'|| workType=='manager' || workType=='waiter'){
           const response=await Person.find({work: workType})
           console.log("response fetched")
           res.status(200).json(response);
      }else{
        res.status(404).json({error: 'invalid worktype'})
      }
    }catch(err){
      console.log(err)
      res.status(500).json({error: 'internal server error'})
    }
  })

  router.put('/:id', async (req,res)=>{         //update method to update the data
    try{
        const personId=req.params.id;          //extract the id from the url parameters
        const updatedPersonData=req.body;     //Updated data for the person

        const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
          new: true,   //return the updated document
          runValidators: true,   //run mongoose validation
        })
        if(!response){
          return res.status(404).json({error: 'person not found'})
        }
        console.log('data updated')
        res.status(200).json(response)
    }catch(err){
      console.log(err)
      res.status(500).json({error: 'internal server error'})
    }
  })

  router.delete('/:id',async (req,res)=>{
    try{
      const personId=req.params.id;    //extract the person id fro the url parameter
      const response=await Person.findByIdAndDelete(personId)
      if(!response){
        return res.status(404).json({error: 'person not found'})
      }
      console.log('data deleted')
      res.status(200).json({message:'person deleted successfully'})
    }catch(err){
      console.log(err)
      res.status(500).json({error: 'internal server error'})
    }
  })
  //message is delivered

  module.exports=router;