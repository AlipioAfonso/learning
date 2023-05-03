import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const document.getElementById("books")

const appSettings = {
    databaseURL: "https://playground-a8608-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const booksInDB = ref(database, "books")

const booksEl = document.getElementById("books")


onValue(booksInDB, function(snapshot) {
    let booksArray = Object.values(snapshot.val())
    booksArray.forEach(uniqueBook => {
        console.log(uniqueBook)
    })
})

function clearBooksListEl() {
    booksEl.innerHTML = ""
}

function appendBookToBooksListEl(bookValue) {
    booksEl.innerHTML += `<li>${bookValue}</li>`
}