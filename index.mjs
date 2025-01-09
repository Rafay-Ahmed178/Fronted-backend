import express from 'express'

 import { product } from './productData.mjs'

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, response) => {
 
  response.send({name :  "Rafay" , age : 21 })

})
app.get('/product', (req, response) => {
 
     //response.send({name :  "Mango" , price : 200, quantity : '1kg' })
    response.send(product)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
