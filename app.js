import express from 'express'
import {PORT,MongoDBURL} from 'config.js'
import { MongoClient, ServerApiVersion } from"mongodb";
const app =express()

const PORT = 3000
app.use(express.json())

const client = new MongoClient(MongoDBURL,  {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);
const booksdb =client.db("mybookshop")
const mybooks =booksDB.collection("mybookscollection")

app.listen(PORT, ()=>{
    console.log(`server started on ${PORT}`)
})

app.get('/',(req, res)=>{
    res.status(212).send("<h1>I'd Let Maki Step on me!</h1>")

})
app.get('/shop',(req, res)=>{
    res.status(212).send("<h1>Please Gege Bring her back</h1>")
})
app.get('/shop/:id',(req, res)=>{
    const data = req.params
    res.status(212).send(`<h1>YOU SHOULD KILL YOURSELF NOW</h1>${data.id} `)
})
