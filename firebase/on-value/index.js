import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const bookshelf = document.getElementById("bookshelf")

const appSettings = {
    databaseURL: "https://playground-a8608-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const booksInDB = ref(database, "books")

const booksEl = document.getElementById("books")


onValue(booksInDB, function(snapshot) {
    let booksArray = Object.values(snapshot.val())
    booksArray.forEach(book => {
        appendBookToBooksListEl(book)
        console.log(book)
    })
})

function clearBooksListEl() {
    booksEl.innerHTML = ""
}

function appendBookToBooksListEl(bookValue) {
    let parent = bookshelf
    let child = "li"
    let text = bookValue

    let node = document.createElement(child)
    let textNode = document.createTextNode(text)

    node.appendChild(textNode)
    parent.appendChild(node)
        //booksEl.innerHTML += `<li>${bookValue}</li>`
}