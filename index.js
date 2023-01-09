const express = require('express')

const app = express()

const cors = require('cors')

const dataService=require('./services/dataService')

// to parse Json
app.use(express.json())

app.listen(3000, () => {
    console.log('listening on port 3000');
})

app.use(cors({
    origin: 'http://localhost:4200'
}))

//api to get all products
app.get('/all-products',(req,res)=>{
    dataService.getProducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    }
    )
})
//api to get  wishlist
app.post('/addtowishlist',(req,res)=>{
    dataService.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.image,req.body.description).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
