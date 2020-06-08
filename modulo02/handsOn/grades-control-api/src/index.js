const express = require('express')

const api = express()

const port = 3000


api.listen(port, () =>{
  console.log(`Api listening on port ${port}`)
})

api.get('/', (req, res) => res.send('Hello World! Jailheminau'))
