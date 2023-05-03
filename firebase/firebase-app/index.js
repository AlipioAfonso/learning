import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-a8608-default-rtdb.firebaseio.com"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")


const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingList = document.getElementById("list")

function clearInputFieldEl(inputField) {
    // Cleans the add-input field
    inputField.value = ""
}

function appendChildOnToParent(parent, child = "div", text = "") {
    let node = document.createElement(child)
    let textNode = document.createTextNode(text)
    node.appendChild(textNode)
    parent.appendChild(node)
}

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    // Put the input value on the database
    push(shoppingListInDB, inputValue)
        // Clean the input field
    clearInputFieldEl(inputFieldEl)
        // Appends a node to another node with text
    appendChildOnToParent(shoppingList, "li", inputValue)
    console.log(inputValue)

})