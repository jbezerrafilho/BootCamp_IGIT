//const fs = require('fs') Esta maneira de importar pode ser substituída pela forma abaixo.

import { promises } from "fs"
import express from "express"

const api = express()
api.use(express.json())
api.listen(3000, () => console.log('API started'))
// Para executar o index,
//node --experimetnal-modules index.js

api.get('/times/campeao', (req, res) => {
  res.send(campeao())
})

const {readFile, writeFile} = promises

const times = []



brasileirao()



async function brasileirao() {
  try {
    const res = await readFile('./2003.json')
    const campeonato = (JSON.parse(res))
    await writeFile('br2003.json', JSON.stringify(campeonato, null, 2))

    campeonato[0].partidas.forEach(partida => {
      // times.push(partida.mandante)
      // times.push(partida.visitante)
      // O push anterir criou um vetor de strings
      // vamos criar um array de objetos
      // criamos o array com os times e pontuação
      times.push({ nome_time: partida.mandante, pontuacao: 0 })
      times.push({ nome_time: partida.visitante, pontuacao: 0 })
    })

    campeonato.forEach(rodada => {
      rodada.partidas.forEach(partida => {
        const indexMandante = times.findIndex(time => time.nome_time === partida.mandante)
        const indexVisitante = times.findIndex(time => time.nome_time === partida.visitante)

        if (partida.placar_visitante > partida.placar_mandante) {

          times[indexVisitante].pontuacao += 3

        } else if (partida.placar_mandante > partida.placar_visitante) {
         
          times[indexMandante].pontuacao += 3
        
        } else {
          
          times[indexMandante].pontuacao += 1
          times[indexVisitante].pontuacao += 1
        
        }
      })
    })

    times.sort((a, b) => {
      return b.pontuacao - a.pontuacao
    })
    console.log(times)
    await writeFile('times.json', JSON.stringify(times, null, 2))

  } catch (err) {
    console.log('Não foi possível consultar a base de dados.')
  }
  console.log(campeao())
}

function campeao() {
  return(times[0]) 
  
}


