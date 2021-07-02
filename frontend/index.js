const btn = document.getElementById('btn').addEventListener('click', run)

function user(name) {
  const detect = document.getElementById('resultado')
  detect.innerHTML = name.country[2].country_id
}

async function pais() {
  const nameInput = document.getElementById('name').value
  const URL = await fetch(`https://api.nationalize.io/?name=${nameInput}`)
  const URL_JSON = URL.json()
  return URL_JSON
}

function run() {
  pais().then(user)
}