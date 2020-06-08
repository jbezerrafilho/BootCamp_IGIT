let globalUser = []
let globalCountries = []
let globalUsersAndCountries = []

console.log("Dom carregado")
async function start() {
  await fetchUsers()
  console.log(globalUser)
  await fetchCountries()
  hideSpinner()
  mergeUsersAndCountries()
  render()
}


async function fetchUsers() {
  const res = await fetch('https://randomuser.me/api/?results=100&seed=promise&nat=us,fr,au,br')

  const json = await res.json()
  globalUser = json.results.map(({ name, picture, nat }) => {
    return {
      userName: name.first,
      userPicture: picture.large,
      userCountry: nat
    }
  })

}

async function fetchCountries() {

  const res = await fetch('https://restcountries.eu/rest/v2/all')

  const json = await res.json()

  globalCountries = json.map(({ name, alpha2Code, flag }) => {
    return {
      countryName: name,
      countryCode: alpha2Code,
      countryFlag: flag
    }
  })
  console.log(globalCountries)

}
function hideSpinner() {
  const spinner = document.querySelector('#spinner')
  spinner.classList.add('hide')
}


function mergeUsersAndCountries() {
  globalUsersAndCountries = []

  globalUser.forEach((user) => {
    const userCountry = globalCountries.find((country) => {
      return country.countryCode === user.userCountry
    })
    globalUsersAndCountries.push({ ...user, ...userCountry })
  })
  console.log(globalUsersAndCountries)
}
function render() {
  const divUsers = document.querySelector('#users')
  divUsers.innerHTML = ` 
    <div>
      ${globalUsersAndCountries.map(user => {
    return `
          <div>
            <div class='flex-row'>
              <img class='avatar'src='${user.userPicture}'/>
              <div>
                <span>${user.userName}</span>
                <img class='flag'src='${user.countryFlag}'/>
                </div>
              </div>
          </div>
          `
  })}
      </div>
     `

}



start()
