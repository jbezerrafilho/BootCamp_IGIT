const fs = require('fs')
const states_json = require('./data/estados.json')
// const states_json = JSON.parse(fs.readFile("./data/estados.json", () => {}))
// const cities_json = JSON.parse(fs.readFile("./data/cidades.json", ()=> {}))
const cities_json = require('./data/cidades.json')


function getCitiesOfStates () {
  states_json.forEach(state => {
    const cityOfState = cities_json.filter(city => {
      return city.Estado === state.ID
    }).map((cityOfState) => {
      return  {
        id: cityOfState.ID,
        nameCity: cityOfState.Nome,
        quantityLetters: cityOfState.Nome.length,
        state: state.Sigla,
        nameState: state.Nome,
        stateID: state.ID
      }
    })
    // console.log(cityOfState)
    // console.log(typeof(states_json))
    
    // let json = JSON.stringify(cityOfState, null, 2)
    fs.writeFileSync(`${state.Sigla}.json`, JSON.stringify(cityOfState, null, 2))
  })

}
   
getCitiesOfStates()