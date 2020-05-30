window.addEventListener('load', () => {
  doSpread()
  doRest()
  doDestructuring()
})

function doSpread(){
  const marriedMen = people.results.filter(
    person => person.name.title === 'Mr'
  )
  
  const marriedWomen = people.results.filter(
    person => person.name.title === 'Ms'
  )

  const marriedPeople = [ ...marriedMen, ...marriedWomen, {msg: "Oi"}]

  console.log(marriedPeople)
}

function doRest(){
  console.log(infiniteSum(1, 2, 5, 2000))
}

function infiniteSum(...numbers){
  return numbers.reduce((acc, curr) => acc + curr, 0)
}

function doDestructuring() {
  const first = people.results[3]

  // Cássico
  // const username = first.login.username
  // const password = first.login.password

  // Destructuring 

  const {username, password} = first.login

  console.log(username)
  console.log(password)
}

