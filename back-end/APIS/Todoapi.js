const exp = require('express')
const todoapi = exp.Router()
todoapi.use(exp.json())
const {ObjectId}=require('mongodb')
const expressAsyncHandler = require('express-async-handler')
todoapi.post('/addtask', expressAsyncHandler(async (request, response) => {
    let TodoCollection = request.app.get("TodoCollection")
    let task = request.body
    task._id=new ObjectId()    
    try {
        await TodoCollection.insertOne(task)
        response.send({message:"Task Added Successfully",payload:task})
    }
    catch (error) { console.log(error) }
}))
todoapi.get('/gettasks',expressAsyncHandler(async(request,response)=>{
    let TodoCollection=request.app.get("TodoCollection")
    try{
        let tasksdata=await TodoCollection.find().toArray()        
        response.send({payload:tasksdata})
    }
    catch(error){console.log(error)}
}))
todoapi.put('/taskcheck',expressAsyncHandler(async(request,response)=>{
    let TodoCollection = request.app.get("TodoCollection")
    let id=request.body._id   
    try{
        await TodoCollection.updateOne({_id:new ObjectId(id)},{$set:{ischecked:!request.body.ischecked}})       
        response.send({payload:id})
    }
    catch(error){console.log(error)}
}))
module.exports=todoapi;