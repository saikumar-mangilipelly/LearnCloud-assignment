const exp=require('express')
const app=exp()
const mongoclient=require('mongodb').MongoClient
require('dotenv').config()
app.use(exp.json())
mongoclient.connect(process.env.DB_connection_url)
.then((client)=>{
    let db=client.db("Todo")
    let TodoCollection=db.collection("TodoCollection")
    app.set("TodoCollection",TodoCollection)
    console.log("Database connection Successful")
})
.catch(error=>console.log("Error in Database Connection",error))
let todoapi=require('./APIS/Todoapi')
app.use('/todo',todoapi)
app.use((request,response)=>{
    response.send({ message: "Error occured", reason: `Invalid Url ${request.url}`})
})
app.use((response,error)=>{    
    response.send({ message: "Error occured", reason: error.message })
})
app.listen(process.env.Port,()=>console.log(`Server is running on Port : ${process.env.Port}`))