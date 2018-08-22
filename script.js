import request from 'superagent'

let contactDiv = document.getElementById('contact')

let bioDiv = document.getElementById('bio')

let avatarDiv = document.getElementById('avatar')

function requestData () {
  request.get('https://api.github.com/users/jeanetteobr')
    .auth('jeanetteobr', 'bf6d51e30a19ab9abac771efa254819b2b1f4f76')
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
  <p><span id="key">Name</span> ${results.name}</p>
  <p><span id="key">Github</span> ${results.html_url}</p>
  <p><span id="key">Website</span> ${results.blog}</p>
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
  <div class="biz-card__avatar">
  <img src="https://avatars0.githubusercontent.com/u/32466511?v=3" alt="Jeanette O'Brien avatar"
  </div>
  `
  avatarDiv.innerHTML = outputImg
}
