// const {create} = require('json-server')

//1. fetch toys
// fetch GET request

//2.add toy info to the card
// for each toy in toys array:
// create a new div with class "card"
// append that card to "#toy-collection" div

//3. add a new toy to db 
// 3a POST to db
// target the new toy form & addeventlistener
// grab a new toy form input
// create a new object
//POST that new object to db.json
// 3b renderToys() again with a new toy included



//

document.addEventListener("DOMContentLoaded", () => {
 displayAddToyForm();

  fetch("http://localhost:3000/toys")
   .then(response => response.json())
   .then((toys) => renderToys(toys))

});

function displayAddToyForm() {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyForm = document.querySelector("#add-toy-form");

  let addToy = false;

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

toyForm.addEventListener("submit", (e)=> {
  e.preventDefault
  console.log("hi")
})

}

function renderToys(toyArray) {
console.log(toyArray)
  
toyArray.forEach((toy) => {
  console.log(toy)

const toyCard = document.createElement('div')
const toyCollection = document.getElementById("toy-collection")
const toyName = document.createElement("h2")
const toyImg = document.createElement('img')
const toyLikes = document.createElement('p')
const likeButton = document.createElement('button')


toyCard.className = "card"
toyName.innerText = toy.name
toyImg.scr = toy.image
toyImg.className = 'toy-avatar'
toyLikes.innerText = `Likes: $(toy.likes)`
likeButton.className = 'like-btn'
likeButton.textContent = "Like"
likeButton.id = toy.id

toyName.innerText = toy.toyName

toyCollection.append(toyName, toyImg, toyLikes)
toyCollection.append(toyCard)
})
}


function addNewToy() {

}