console.log("helllo")
// let a = prompt("enter your name")
// console.log(a)
import  express from "express"
const app = express()
const port = 5000
//192.168.228.12:5000

app.get('/', (req, res) => {

    console.log("Requisting ip" , req.ip)
  res.send('my name is Alina Arif, this is my server')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})