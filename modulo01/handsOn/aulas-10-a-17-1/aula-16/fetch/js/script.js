window.addEventListener('load', function() {
  doFetch()
  doFetchAsync()

  executDivisionPromise()
  executDivisionPromiseAsyncAwait()
  
})

function doFetch() {
  fetch('https://api.github.com/users/josebezerrafilho').then(res => {
    res.json().then(data => {
      showData(data)
    })
  }).catch(error => {
    console.log('Bad request')
  })
}

async function doFetchAsync() {
  const res = await fetch('https://api.github.com/users/josebezerrafilho')
  const json = await res.json()
  console.log(json)
  
}


function showData(data) {

  const user = document.querySelector('#user')
  const { login, name} = data
  user.textContent = `${login} ` + `${name}`  

}

function divisionPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Não é possivel dividir por 0')
    }
    resolve(a/ b)
  })
}

function executDivisionPromise () {
  divisionPromise(12 , 4  ).then(result => {
    console.log(result)
  }).catch(errorMessage => {
    console.log('Falha na divisão. '  + errorMessage )
  })
}

async function executDivisionPromiseAsyncAwait () {
  const division = await divisionPromise(12, 6)
  console.log(division)
}



