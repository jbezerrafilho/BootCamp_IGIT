const express = require('express')
const cidades = require('./data/Cidades.json')
const estados = require('./data/Estados.json')
const api = express()

api.use(express.json())

api.listen(3000, () => {
  return console.log('Servidor iniciado!')
})

api.get('/city/:id', (req, res) => {
  const id = req.params.id
  const cityFound = cidades.find(cidade => {
     return cidade.ID === id
    })
    if (!cityFound) {
     return  res.send('Cidade não encontrada.')
    }
    return res.json(cityFound)
  })
  // for ( let cidade of cidades) {
  //   if (cidade.ID === id){
  //     res.json(cidade)
  //     return
  //   }
  // }

  api.get('/state/:id', (req, res) => {
    const id = req.params.id
    const stateFound = estados.find(estado => {
       return estado.ID === id
      })
      if (!stateFound) {
       return  res.send('Estado não encontrada.')
      }
      return res.json(stateFound)
    })

    api.get('/city', (req, res) => {
      const estado = req.query.Estado
    
        return res.json(estado)
      })


