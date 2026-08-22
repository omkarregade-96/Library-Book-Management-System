// ================================
// SEARCH BOOKS
// ================================

const searchInput = document.querySelector(".search-box input");
const tableRows = document.querySelectorAll("tbody tr");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    tableRows.forEach(function (row) {

        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(searchText)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

});


// ================================
// ISSUE BOOK
// ================================

const issueButtons = document.querySelectorAll(".issue-btn");

issueButtons.forEach(function (button) {

    button.addEventListener("click", function () {

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

    });

});


// ================================
// RETURN BOOK
// ================================

const returnButtons = document.querySelectorAll(".return-btn");

returnButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const row = button.closest("tr");
        const status = row.querySelector(".available, .issued");

        if (status.classList.contains("issued")) {

            status.textContent = "Available";
            status.classList.remove("issued");
            status.classList.add("available");

            const issueButton = row.querySelector(".issue-btn");

            if (issueButton) {
                issueButton.textContent = "Issue";
                issueButton.disabled = false;
            }

            alert("Book returned successfully!");

        } else {

            alert("Book is already available.");

        }

    });

});


// ================================
// ADD BOOK
// ================================

const addButton = document.querySelector(".add-btn");

addButton.addEventListener("click", function () {

    const title = prompt("Enter book title:");
    const author = prompt("Enter author name:");

    if (title && author) {

        const tableBody = document.querySelector("tbody");

        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>
                <span class="available">Available</span>
            </td>
            <td>
                <button class="issue-btn">Issue</button>
                <button class="return-btn">Return</button>
            </td>
        `;

        tableBody.appendChild(newRow);

        alert("Book added successfully!");

        // Add functionality to new buttons
        addBookButtonEvents(newRow);
    }

});


// ================================
// EVENTS FOR NEW BOOK
// ================================

function addBookButtonEvents(row) {

    const issueButton = row.querySelector(".issue-btn");
    const returnButton = row.querySelector(".return-btn");

    issueButton.addEventListener("click", function () {

        const status = row.querySelector(".available, .issued");

        if (status.classList.contains("available")) {

            status.textContent = "Issued";
            status.classList.remove("available");
            status.classList.add("issued");

            issueButton.textContent = "Issued";
            issueButton.disabled = true;

            alert("Book issued successfully!");

        }

    });


    returnButton.addEventListener("click", function () {

        const status = row.querySelector(".available, .issued");

        if (status.classList.contains("issued")) {

            status.textContent = "Available";
            status.classList.remove("issued");
            status.classList.add("available");

            issueButton.textContent = "Issue";
            issueButton.disabled = false;

            alert("Book returned successfully!");

        }

    });

}
