const messageNotifications = document.getElementById("message-notifications")
const numMessages = 3; // in a real-world situation, this would likely make an API call to determine the number of messages
messageNotifications.innerText = numMessages

const signOutButton = document.getElementById("sign-out-button")
signOutButton.addEventListener("click", () => alert("Thank you for trying to sign out, but unfortunately, that is not currently an option."))

/* Filtering By Quarter */
const tableRowsParent = document.getElementById("table-rows")
const tableRows = tableRowsParent.children

const allRows = [...tableRows]

const checkboxes = document.querySelectorAll("input[type='checkbox']")
const checkedCheckboxes = {
    q1: false,
    q2: false,
    q3: false,
    q4: false
}
checkboxes.forEach(checkbox => checkbox.addEventListener('change', () => {
    const name = checkbox.name
    checkedCheckboxes[name] = !checkedCheckboxes[name]
    filterRows(checkedCheckboxes)
}))

const q1Rows = [...tableRows].filter(row => row.classList.contains("q1"))
const q2Rows = [...tableRows].filter(row => row.classList.contains("q2"))
const q3Rows = [...tableRows].filter(row => row.classList.contains("q3"))
const q4Rows = [...tableRows].filter(row => row.classList.contains("q4"))

const rowMapper = {
    q1: q1Rows,
    q2: q2Rows,
    q3: q3Rows,
    q4: q4Rows
}

const filterRows = (checkedCheckboxes) => {
    allRows.forEach(row => row.remove())
    const rowsToDisplay = []
    for (quarter in checkedCheckboxes) {
        if (checkedCheckboxes[quarter] === true) {
            rowsToDisplay.push(...rowMapper[quarter])
        }
    }
    if (rowsToDisplay.length === 0) {
        allRows.forEach(row => tableRowsParent.appendChild(row))
    }
    rowsToDisplay.forEach(row => tableRowsParent.appendChild(row))
}

/* Table Headers For Adjusting Sorting */
const tableHeaders = document.getElementsByTagName("th")

/* Set up month order for sorting chronologically */
const monthOrder = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const sortRowsChronologically = (rows) => {
    tableHeaders[0].setAttribute("aria-sort", "ascending")
    tableHeaders[1].setAttribute("aria-sort", "none")
    tableHeaders[2].setAttribute("aria-sort", "none")
    return rows.sort((rowA, rowB) => {
        const monthA = rowA.children[0].innerText
        const monthB = rowB.children[0].innerText
        return monthOrder.indexOf(monthA) > monthOrder.indexOf(monthB) ? 1 : -1
    })
}

/* Sort By Sales */
const sortOrder = ["chronological", "ascending", "descending"]
let currentSortIdx = 0
const sortBySalesButton = document.getElementById("sort-sales");

const sortBySales = (rows, isAsc) => {
    return rows.sort((rowA, rowB) => {
        const salesA = rowA.children[1].innerText.replace(/[$,]/gi, '')
        const salesB = rowB.children[1].innerText.replace(/[$,]/gi, '')
        return isAsc ? salesA - salesB : salesB - salesA
    })
}

sortBySalesButton.addEventListener('click', () => {
    const newSortIdx = (currentSortIdx + 1) % 3
    currentSortIdx = newSortIdx
    const currSortOrder = sortOrder[currentSortIdx]
    const visibleRows = [...document.getElementById("table-rows").children]
    visibleRows.forEach(row => row.remove())
    let sortedRows = []
    if (currSortOrder === "chronological") {
        sortedRows = sortRowsChronologically(visibleRows)
    } else {
        sortedRows = sortBySales(visibleRows, currSortOrder === "ascending")
        tableHeaders[0].setAttribute("aria-sort", "none")
        tableHeaders[1].setAttribute("aria-sort", currSortOrder)
    }
    sortedRows.forEach(row => tableRowsParent.appendChild(row))
})

/* Sort By Top Salesperson */
let sortBySalesperson = false;
const sortBySalespersonButton = document.getElementById("sort-salesperson");
sortBySalespersonButton.addEventListener('click', () => {
    sortBySalesperson = !sortBySalesperson
    const visibleRows = [...document.getElementById("table-rows").children]
    visibleRows.forEach(row => row.remove())
    if (sortBySalesperson) {
        tableHeaders[0].setAttribute("aria-sort", "none")
        tableHeaders[2].setAttribute("aria-sort", "ascending")
        const rowsSortedBySalesperson = visibleRows.sort((rowA, rowB) => {
            const salespersonA = rowA.children[2].innerText
            const salespersonB = rowB.children[2].innerText
            return salespersonA > salespersonB ? 1 : -1
        })
        rowsSortedBySalesperson.forEach(row => tableRowsParent.appendChild(row))
    } else {
        const rowsSortedChronologically = sortRowsChronologically(visibleRows)
        rowsSortedChronologically.forEach(row => tableRowsParent.appendChild(row))
    }
})