// DOCKER (Abrir Docker Desktop)
// docker run -p 6379:6379 --name some-redis -d redis:4.0.1

// REDIS
// npm i redis@4.0.1

/*let express = require('express');
let app = express();
let port = 3000;
let redis = require('redis');
let client = redis.createClient();*/

import express from 'express';
let app = express();
let port = 3000;
app.use(express.static('public'));
import { createClient } from 'redis';

(async () => {
  const client = createClient();
  await client.connect();

  //init
  
  const value = await  client.hGetAll('keys');
  //console.log(value);

  //Data route
  app.get('/data', (req, res) => {    
    async function data(req, res) {
      const values = await client.hGetAll('keys');
      //console.log(values);
      res.send(values);
    }
    data(req, res);
  });

  //Update route
  app.get("/update/:section/:value", (req, res) => {
    async function update(req, res) {
      const section = req.params.section;
      const value = Number(req.params.value);
      await client.hSet('keys',section, value);
      const values = await client.hGetAll('keys');
      console.log(section, value);
      res.send(values);
    }
    update(req, res);
  });

  app.listen(port, () => {
    console.log(`Running on port ${port}`);
  });
  
  process.on("exit", function () {
    client.quit();
  });


})();


// update data
/*app.get('/update/:key/:value', (req, res) => {
  const key = req.params.key;
  let value = Number(req.params.value);
  client.get(key, (err, reply) => {

    // new value
    value = Number(reply) + value;
    client.set(key, value);

    // return data to client
    data()
      .then(data => {
        console.log(data);
        res.send(data);
      });
  });
});*/

