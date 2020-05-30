window.addEventListener('load', () => {

  doMap()
  doFilter()
  doForEach()
  doReduce()
  doFind()
  doSome()
  doEvery()
  doSort()

})

// Map e Filter são imutáveis, pois não altera o vetor principal

function doMap() {
  const nameEmailArray = people.results.map(person => {
    return {
      name: person.name,
      email: person.email
    }
  })
  console.log(nameEmailArray)
  return nameEmailArray
}

function doFilter() {
  const olderThan50 = people.results.filter(person => {
    return person.dob.age > 50
  })

  console.log(olderThan50)
}

// Inclui nova propriedade no objeto (mutável)
function doForEach() {
  const mappedPeople = doMap()
  mappedPeople.forEach(person => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length
  })
  console.log(mappedPeople)
}

function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age
  }, 0)

  console.log(totalAges)
  // Executamos um for para tirar a prova

  let sumAges = 0
  for (i = 0; i < people.results.length; i++) {
    let current = people.results[i]
    sumAges += current.dob.age
  }
  console.log(sumAges)

  let sumAges1 = 0
  for (let person of people.results) {
    sumAges1 += person.dob.age
  }
  console.log(sumAges1)
}


function doFind() {
  const found = people.results.find(person => {
    return person.location.state === 'Rio Grande do Norte';
  });

  console.log(found);
}

function doSome() {
  const found = people.results.some(person => {
    return person.location.state === 'Paraná'
  })

  console.log(found)
}

function doEvery() {
  const every = people.results.every(person => {
    return person.nat === 'BR'
  })

  console.log(every)
}

function doSort() {
  const mappedNames = people.results
    .map(person => {
      return {
        name: person.name.first
      }
    })
    .filter(person => person.name.startsWith('A'))
    .sort((a, b) => {
      // return a.name.localeCompare(b.name)
      // return a.name.length - b.name.length
      return b.name.length - a.name.length
    })

  console.log(mappedNames)
}