// ========================================
// SEARCH BOOKS
// ========================================

const searchInput = document.querySelector(".search-box input");
const tableBody = document.querySelector("tbody");

searchInput.addEventListener("input", function () {

    const searchText = this.value.toLowerCase().trim();
    const rows = tableBody.querySelectorAll("tr");

    rows.forEach(function (row) {

        const bookDetails = row.textContent.toLowerCase();

        row.style.display =
            bookDetails.includes(searchText) ? "" : "none";

    });

});


// ========================================
// GET BOOK STATUS
// ========================================

function getBookStatus(row) {
    return row.querySelector(".available, .issued");
}


// ========================================
// ISSUE BOOK
// ========================================

function issueBook(button) {

    const row = button.closest("tr");
    const status = getBookStatus(row);

    if (status.classList.contains("issued")) {
        showMessage("Book is already issued.");
        return;
    }

    status.textContent = "Issued";

    status.classList.remove("available");
    status.classList.add("issued");

    button.textContent = "Issued";
    button.disabled = true;

    showMessage("Book issued successfully!");

}


// ========================================
// RETURN BOOK
// ========================================

function returnBook(button) {

    const row = button.closest("tr");
    const status = getBookStatus(row);

    const issueButton = row.querySelector(".issue-btn");

    if (status.classList.contains("available")) {
        showMessage("Book is already available.");
        return;
    }

    status.textContent = "Available";

    status.classList.remove("issued");
    status.classList.add("available");

    issueButton.textContent = "Issue";
    issueButton.disabled = false;

    showMessage("Book returned successfully!");

}


// ========================================
// MESSAGE FUNCTION
// ========================================

function showMessage(message) {
    alert(message);
}


// ========================================
// ADD NEW BOOK
// ========================================

const addButton = document.querySelector(".add-btn");

addButton.addEventListener("click", addNewBook);


function addNewBook() {

    const bookName = getBookInput("Enter book name:");

    if (!bookName) {
        return;
    }

    const authorName = getBookInput("Enter author name:");

    if (!authorName) {
        return;
    }

    createBookRow(bookName, authorName);

    showMessage("Book added successfully!");

}


// ========================================
// GET INPUT
// ========================================

function getBookInput(message) {

    const value = prompt(message);

    if (!value || value.trim() === "") {
        return null;
    }

    return value.trim();

}


// ========================================
// CREATE BOOK ROW
// ========================================

function createBookRow(bookName, authorName) {

    const newRow = document.createElement("tr");

    newRow.innerHTML = `

        <td>${bookName}</td>

        <td>${authorName}</td>

        <td>
            <span class="available">
                Available
            </span>
        </td>

        <td>

            <button class="issue-btn">
                Issue
            </button>

            <button class="return-btn">
                Return
            </button>

        </td>

    `;

    tableBody.appendChild(newRow);

}


// ========================================
// BUTTON EVENT DELEGATION
// ========================================

tableBody.addEventListener("click", function (event) {

    const clickedButton = event.target;

    if (clickedButton.classList.contains("issue-btn")) {

        issueBook(clickedButton);

    }

    if (clickedButton.classList.contains("return-btn")) {

        returnBook(clickedButton);

    }

});
