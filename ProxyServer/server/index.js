const express = require('express');
const app = express();
const axios = require('axios');

require('dotenv').config();
const port = process.env.PROXY_PORT || 5001;
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));

app.get('/carousel/:id', (req, res) => {
  const id = req.params.id
  // additional items
  axios.get(`http://localhost:5000/carousel/${id}`)
    .then((response) => {
      res.status(200).json(response.data);
    });
});

// app.get('/details/:id', (req, res) => {
//   const id = req.params.id
//   // additional items
//   axios.get(`http://ec2-18-220-152-98.us-east-2.compute.amazonaws.com/details/${id}`)
//     .then((response) => {
//       res.status(200).json(response.data);
//     });
// });

app.get('/reviews/:id', (req, res) => {
  const id = req.params.id
  // additional items
  axios.get(`http://ec2-3-14-246-138.us-east-2.compute.amazonaws.com/reviews/${id}`)
    .then((response) => {
      res.status(200).json(response.data);
    });
});

app.get('/additional/:id', (req, res) => {
  const id = req.params.id
  // additional items
  axios.get(`http://ec2-3-133-117-113.us-east-2.compute.amazonaws.com/additional/${id}`)
    .then((response) => {
      res.status(200).json(response.data);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})