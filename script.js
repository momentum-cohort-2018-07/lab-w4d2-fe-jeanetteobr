import request from 'superagent'

let contactDiv = document.getElementById('contact')

let bioDiv = document.getElementById('bio')

let avatarDiv = document.getElementById('avatar')

function requestData () {
  request.get('https://api.github.com/users/jeanetteobr')
    .auth('jeanetteobr', '14444c7e668f320de612f16af9de03d3a658d27e')
    .then(response => {
      console.log(response)
      displayContactResults(response.body)
      displayBioResults(response.body)
      displayPhotoResults(response.body)
    })
}

requestData()

function displayContactResults (results) {
  let outputContact = `
   <div class="biz-card">
   <h1>Contact</h1>
  <p>Name: ${results.name}</p>
  <p>Github: ${results.html_url}</p>
  <p>Website: ${results.blog}</p>
   </div>
   `
  contactDiv.innerHTML = outputContact
}

function displayBioResults (results) {
  let outputBio = `
  <div class="biz-card">
  <h1>Bio</h1>
  <p>${results.bio}</p>
  </div>
  `
  bioDiv.innerHTML = outputBio
}

function displayPhotoResults (results) {
  let outputImg = `
  <div class="biz-card">
  <img src="${results.avatar_url}" alt="Jeanette O'Brien avatar"
  </div>
  `
  avatarDiv.innerHTML = outputImg
}
