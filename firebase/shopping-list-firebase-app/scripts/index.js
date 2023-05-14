import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-a8608-default-rtdb.firebaseio.com"
}

const dbName = "shoppingList"

// Methods related to the firebase
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListDB = ref(database, dbName)

// Variables from the DOM
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("list0")


const tabs = document.getElementById("tabs")

const tabsArray = {
    0: {
        id: 0, 
        parent: document.getElementById("tabs"), 
        child: "li", 
        text: "Shopping List"
    },
    1: {
        id: 1, 
        parent: document.getElementById("tabs"), 
        child: "li", 
        text: "Eletronic List"
    }
}

Object.values(tabsArray).forEach( e => {
    appendChildToParent(e)
})


//appendChildToParentWithID(tabsArray)


// Get and append the shopping list on the ul list
onValue(shoppingListDB, function(snapshot) {
    clearInnerElement(shoppingListEl)
    if (snapshot.exists()) {
        let shoppingListArrays = Object.entries(snapshot.val())


        shoppingListArrays.forEach(shoppingItem => {

            appendToShoppingList(shoppingItem)
        });

    } else {
        shoppingListEl.textContent = "Essa lista ainda não tem itens..."
    }


})


// Functions 

function clearInputFieldEl(inputField) {
    // Cleans the add-input field
    inputField.value = ""
}

function appendChildToParent(element) {
    //id: itemID, parent: shoppingListEl, child: "li", text: itemValue
    let node = document.createElement(element.child)
    let textNode = document.createTextNode(element.text)
    let activeTabs = []

    node.appendChild(textNode)
    element.parent.appendChild(node)
    node.addEventListener("mousedown",  e => {
        let tabList = document.getElementById("tabs").getElementsByTagName("li")
        Object.values(tabList).forEach( tab => {
            tab.style.background = "white"
        })
        node.style.background = "blue"


        const elementId = "list" + element.id
        disappearAllListsButOne(elementId)

        
    })
}

function disappearAllListsButOne(visibleElement) {
    let lists = document.getElementsByClassName("list")
    let visible = document.getElementById(visibleElement)
    Object.values(lists).forEach( e => {
        e.style.display = "none"
        visible.style.display = "flex"

    } )
}

function appendChildToParentWithID(element) {
    //id: itemID, parent: shoppingListEl, child: "li", text: itemValue
    let node = document.createElement(element.child)
    let textNode = document.createTextNode(element.text)
    node.appendChild(textNode)
    element.parent.appendChild(node)
    node.addEventListener("dblclick", function() {
        console.log(element.id)
        let exactLocationOfShoppingDB = ref(database, `${dbName}/${element.id}`)

        remove(exactLocationOfShoppingDB)
    })
}


function appendToShoppingList(shoppingItem) {
    let itemID = shoppingItem[0]
    let itemValue = shoppingItem[1]

    appendChildToParentWithID({
        id: itemID,
        parent: shoppingListEl,
        child: "li",
        text: itemValue
    })



}

// Clear the shopping list 
function clearInnerElement(element) {
    element.textContent = ""
}

// Events 

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    clearInnerElement(shoppingListEl)

    // Put the input value on the database
    push(shoppingListDB, inputValue)
        // Clean the input field
    clearInputFieldEl(inputFieldEl)

    // Appends a node to another node with text
    //appendChildToParentWithID(shoppingListEl, "li", inputValue)
    console.log(inputValue)

})