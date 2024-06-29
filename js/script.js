var bookmarkNameInput = document.getElementById("bookmarkName");
var bookmarkUrlInput = document.getElementById("bookmarkUrl");
var errorBox = document.getElementById("errorBox");
var closeBtn = document.getElementById("closeBtn");

var bookList = [];
if(localStorage.getItem("book")){
    bookList=JSON.parse(localStorage.getItem("book"))
    displayData();
}
function addBook() {
    if (validitionName() && validitionUrl()) {
        var book = {
            name: bookmarkNameInput.value,
            url: bookmarkUrlInput.value
        };
        bookList.push(book);
        localStorage.setItem("book", JSON.stringify(bookList));
        displayData();
        clearForm();
    } else {
        errorBox.classList.remove("d-none");
    }
}

closeBtn.addEventListener("click", function() {
    errorBox.classList.add("d-none");
});

function displayData() {
    var cartona = "";

    for (var i = 0; i < bookList.length; i++) {

        cartona +=
            `<tr>
            <td>${i + 1}</td>
            <td>${bookList[i].name}</td>
            <td>
            <a href="${bookList[i].url}" target="_blank"><button class="border-0 rounded-2 py-2 px-4 btn-visit text-center"><i class="fa-solid fa-eye"></i> Visit</button></a>
            </td>
            <td>
                <button onclick="deleteItem(${i})" class="border-0 rounded-2 py-2 px-4 btn-delete text-center"><i class="fa-solid fa-trash"></i> Delete</button>
            </td>
            </tr>`;
    }
    document.getElementById("tableDAta").innerHTML = cartona;
}

function clearForm() {
    bookmarkNameInput.value = "";
    bookmarkUrlInput.value = "";
    bookmarkNameInput.classList.remove("is-valid", "is-invalid");
    bookmarkUrlInput.classList.remove("is-valid", "is-invalid");
}

function deleteItem(index) {
    bookList.splice(index, 1);
    localStorage.setItem("book", JSON.stringify(bookList));
    displayData();
    console.log(bookList);
}

function validitionName() {
    var text = bookmarkNameInput.value;
    var regex = /^[A-Za-z]{1,}$/;

    if (regex.test(text)) {
        bookmarkNameInput.classList.add("is-valid");
        bookmarkNameInput.classList.remove("is-invalid");
        return true;
    } else {
        bookmarkNameInput.classList.add("is-invalid");
        bookmarkNameInput.classList.remove("is-valid");
        return false;
    }
}

function validitionUrl() {
    var text = bookmarkUrlInput.value;
    var regex = /^https:\/\/(www\.)?[a-z]+\.[a-z]+(\/[a-zA-Z0-9._~:\/?#[@\]!$&'()*+,;=]*)?$/;


    if (regex.test(text)) {
        bookmarkUrlInput.classList.add("is-valid");
        bookmarkUrlInput.classList.remove("is-invalid");
        return true;
    } else {
        bookmarkUrlInput.classList.add("is-invalid");
        bookmarkUrlInput.classList.remove("is-valid");
        return false;
    }
}
