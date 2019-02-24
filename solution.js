document.addEventListener("DOMContentLoaded" () +)
const toyDiv = document.querySelector('#toy-collection')
const toyNew = document.querySelector('#create-toy')
let addToy = false


// fetch(toyUrl)
// .then(res => res.json())
// .then(toys => {
//   toys.forEach(displayToy)
// })
//
//
//
// function displayToy(toy) {
// toyDiv.innerHTML +=
//     `<div class="card">
//     <h2>${toy.name}</h2>
//     <img src="${toy.image}" class="toy-avatar"/>
//     <p data-id=${toy.id}> ${toy.likes} likes </p>
//     <button data-id=${toy.id} class="like-btn">Like <3</button>
//   </div>`
// }
//
// toyNew.addEventListener('click', addNewToy)
//
// function addNewToy(e) {
//   e.preventDefault()
//
//   let nameLocation = document.querySelector('#name-input').value
//   let imageLocation = document.querySelector('#image-input').value
//
//
//  fetch(toyUrl, {
//    method: "POST",
//    headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//     "body": JSON.stringify({name: nameLocation, image: imageLocation, likes: 0})
//   })
//   .then(res => res.json())
//   .then(displayToy)
// }
//
// document.addEventListener("click", (e) => {
//
//   e.preventDefault
//   if (e.target.className==="like-btn"){
//     likeToy(e)
//   }
// })
//
//
// function likeToy(e){
//   // console.log(e.target.dataset.id)
//   let num = parseInt(e.target.previousElementSibling.innerText)
//   addedLike = num + 1
//
//
//
//   let id = e.target.dataset.id
//   // console.log(e.target)
//
//
//
//   fetch(`${toyUrl}/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify({ likes: addedLike })
//   }).then(res => res.json())
//     .then(toy => {
//        e.target.previousElementSibling.innerText = `${toy.likes} likes`
//     })
// }
