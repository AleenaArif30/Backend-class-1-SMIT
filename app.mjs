// console.log("helllo")
// // let a = prompt("enter your name")
// // console.log(a)
// import  express from "express"
// import cors from "cors"
// const app = express()
// app.use(cors())
// const port =  5000

// app.get('/', (req, res) => {

//     console.log("Requisting ip" , req.ip)
//   res.send('my name is Alina Arif, this is my server')
// })


// app.get('/weather', (req, res) => {

//   console.log("weather app" )

// // const cities =[ {
// //   city:"Karachi",
// //   tempInC:26,
// //   humidity:10,
// //   high:32,
// //   low:23
// // },
// // {
// //   city:"lahore",
// //   tempInC:21,
// //   humidity:10,
// //   high:32,
// //   low:23
// // }
// // ]


// res.send({
//   city:"Karachi",
//   tempInC:26,
//   humidity:10,
//   high:32,
//   low:23




// })
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const port = 5000;

app.get('/', (req, res) => {
  console.log("Requesting IP", req.ip);
  res.send('My name is Alina Arif, this is my server');
});

app.get('/weather/:cityName', (req, res) => {
  console.log("Weather app");

  const cities = {
    Karachi:{
      city: "Karachi",
      tempInC: 26,
      humidity: 10,
      high: 32,
      low: 23
    },
    Lahore:{
      city: "Lahore",
      tempInC: 21,
      humidity: 15,
      high: 28,
      low: 20
    },
    Islamabad:{
      city: "Islamabad",
      tempInC: 22,
      humidity: 12,
      high: 30,
      low: 19
    },
    Peshawar:{
      city: "Peshawar",
      tempInC: 27,
      humidity: 8,
      high: 34,
      low: 24
    }
  };
  let userInputCity = req.params.cityName.toLowerCase()
  let dataSend = cities[userInputCity]

  if(dataSend){
    res.send(dataSend);
  }else{
    res.status(404).send(`Data for ${userInputCity} not found`)
  }

 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
