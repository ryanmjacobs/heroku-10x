const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .get('/', (req, res) => res.send("hello world"))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
