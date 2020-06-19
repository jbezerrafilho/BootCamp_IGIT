const express = require('express')
const api = express()

api.get('/' , (req, res) => {
  console.log('Hello World')
})

api.listen(3000, () => console.log('Api iniciada'))
