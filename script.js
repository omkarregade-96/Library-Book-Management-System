// ================================
// SEARCH BOOKS
// ================================

const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    const rows = document.querySelectorAll("tbody tr");

    rows.forEach(function (row) {

        const bookDetails = row.textContent.toLowerCase();

        if (bookDetails.includes(searchText)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

});


// ================================
// ISSUE BOOK
// ================================

function issueBook(button) {

    const row = button.closest("tr");

    const status = row.querySelector(".available, .issued");

    if (status.classList.contains("available")) {

        status.textContent = "Issued";

        status.classList.remove("available");
        status.classList.add("issued");

        button.textContent = "Issued";
        button.disabled = true;

        alert("Book issued successfully!");

    } else {

        alert("Book is already issued.");

    }

}


// ================================
// RETURN BOOK
// ================================

function returnBook(button) {

    const row = button.closest("tr");

    const status = row.querySelector(".available, .issued");

    const issueButton = row.querySelector(".issue-btn");

    if (status.classList.contains("issued")) {

        status.textContent = "Available";

        status.classList.remove("issued");
        status.classList.add("available");

        issueButton.textContent = "Issue";
        issueButton.disabled = false;

        alert("Book returned successfully!");

    } else {

        alert("Book is already available.");

    }

}


// ================================
// ISSUE & RETURN BUTTONS
// ================================

function addButtonEvents() {

    const issueButtons = document.querySelectorAll(".issue-btn");
    const returnButtons = document.querySelectorAll(".return-btn");


    issueButtons.forEach(function (button) {

        button.onclick = function () {
            issueBook(button);
        };

    });


    returnButtons.forEach(function (button) {

        button.onclick = function () {
            returnBook(button);
        };

    });

}


// Run button events
addButtonEvents();


// ================================
// ADD NEW BOOK
// ================================

const addButton = document.querySelector(".add-btn");

addButton.addEventListener("click", function () {

    const bookName = prompt("Enter book name:");

    if (!bookName) {
        return;
    }


    const authorName = prompt("Enter author name:");

    if (!authorName) {
        return;
    }


    const tableBody = document.querySelector("tbody");


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


    // Add events to new buttons
    addButtonEvents();


    alert("Book added successfully!");

});
