import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-a8608-default-rtdb.firebaseio.com"
}

// Methods related to the firebase
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListDB = ref(database, "shoppingList")

// Get and append the shopping list on the ul list
onValue(shoppingListDB, function(snapshot) {

    let shoppingListValues = Object.values(snapshot.val())

    shoppingListValues.forEach(shoppingItem => {


        console.log(shoppingItem)
        appendToShoppingList(shoppingItem)
    });

})

// Variables from the DOM
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("list")


// Functions 

function clearInputFieldEl(inputField) {
    // Cleans the add-input field
    inputField.value = ""
}

function appendChildToParent(parent, child = "div", text = "") {
    let node = document.createElement(child)
    let textNode = document.createTextNode(text)
    node.appendChild(textNode)
    parent.appendChild(node)
}


function appendToShoppingList(shoppingItem) {
    appendChildToParent(shoppingListEl, "li", shoppingItem)
}

// Events 

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    // Put the input value on the database
    push(shoppingListInDB, inputValue)
        // Clean the input field
    clearInputFieldEl(inputFieldEl)
        // Appends a node to another node with text
    appendChildOnToParent(shoppingListEl, "li", inputValue)
    console.log(inputValue)

})