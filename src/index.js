document.addEventListener("DOMContentLoaded", () => {


const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const newToyForm = document.querySelector('.add-toy-form')

let addToy = false

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})

const toyDiv = document.querySelector('#toy-collection')
const toyUrl = `http://localhost:3000/toys`

fetch(toyUrl)
.then(res => res.json())
.then(toy => toy.forEach(displayToy))

function displayToy(toy) {
toyDiv.innerHTML +=
    `<div class="card" data-id=${toy.id}>
    <h2>${toy.name}</h2>
    <img src="${toy.image}" class="toy-avatar"/>
    <p data-id=${toy.id}> ${toy.likes} Cumshots </p>
    <button data-id=${toy.id} class="like-btn">Like <3</button>
  </div>`
}

newToyForm.addEventListener('submit', newToy)

function newToy(e){
    e.preventDefault()

  const nameInput = document.querySelector('#name-input').value
  const imageInput = document.querySelector('#image-input').value
  console.log(imageInput)
  console.log(nameInput)
  fetch(toyUrl, {method:"POST",
  headers:
{
  "Content-Type": "application/json",
  Accept: "application/json"
},
body: JSON.stringify({name: nameInput, image: imageInput,likes:0})
})
.then(res => res.json())
.then(toy => displayToy(toy))
}

toyDiv.addEventListener('click', addLikes)

function addLikes(e){
  if( e.target.className === "like-btn") {
  const  toyID = (e.target.dataset.id)
  let likes = e.target.previousSibling.previousSibling
  let  likeCount = parseInt(likes.innerHTML)
  ++likeCount
  likes.innerHTML = `${likeCount} Likes`
  console.log(likeCount)
  fetch(`${toyUrl}/${toyID}`
     ,{
     method: "PATCH",
     headers: {
       "Content-Type": "application/json",
       Accept: "application/json"
     },
     body:JSON.stringify({likes: likeCount})
   })

  }
}







})
