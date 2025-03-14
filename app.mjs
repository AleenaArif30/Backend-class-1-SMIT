

// import express from "express";
// import path from 'path'

// import cors from "cors";

// const app = express();
// app.use(cors());
// const __dirname = path.resolve();

// const port = 5000;
// //192.168.2.11:5000

// app.get('/', (req, res) => {
//   console.log("Requesting IP", req.ip);
//   res.send('My name is Alina Arif, this is my server');
// });

// app.get('/weather/:city', (req, res) => {
//   console.log("Weather app");

//   const cities = {
//     Karachi:{
//       city: "Karachi",
//       tempInC: 26,
//       humidity: 10,
//       high: 32,
//       low: 23
//     },
//     Lahore:{
//       city: "Lahore",
//       tempInC: 21,
//       humidity: 15,
//       high: 28,
//       low: 20
//     },
//     Islamabad:{
//       city: "Islamabad",
//       tempInC: 22,
//       humidity: 12,
//       high: 30,
//       low: 19
//     },
//     Peshawar:{
//       city: "Peshawar",
//       tempInC: 27,
//       humidity: 8,
//       high: 34,
//       low: 24
//     }
//   };
//   let userInputCity = req.params.city.toLowerCase()
//   let dataSend = cities[userInputCity]


//   if(dataSend){
//     res.send(dataSend);
//   }else{
//     res.status(404).send(`Data for ${req.params.city} not found`)
//   }

 
// });
// app.use(express.static(path.join(__dirname, 'public')))


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });





import express from "express";
import path from 'path';
import cors from "cors";

const app = express();
app.use(cors());
const __dirname = path.resolve();

const port = 5000;

app.get('/', (req, res) => {
    console.log("Requesting IP", req.ip);
    res.send('My name is Alina Arif, this is my server');
});

app.get('/weather/:city', (req, res) => {
    console.log("Weather app");

    const cities = {
        karachi: {
            city: "Karachi",
            tempInC: 26,
            humidity: 10,
            high: 32,
            low: 23
        },
        lahore: {
            city: "Lahore",
            tempInC: 21,
            humidity: 15,
            high: 28,
            low: 20
        },
        islamabad: {
            city: "Islamabad",
            tempInC: 22,
            humidity: 12,
            high: 30,
            low: 19
        },
        peshawar: {
            city: "Peshawar",
            tempInC: 27,
            humidity: 8,
            high: 34,
            low: 24
        }
    };

    let userInputCity = req.params.city.toLowerCase(); // Ensure lowercase input
    let dataSend = cities[userInputCity];

    if (dataSend) {
        res.send(dataSend);
    } else {
        res.status(404).send({ error: `Data for ${req.params.city} not found` });
    }
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
