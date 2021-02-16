
let journal = []

export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood") // Fetch from the API
        .then(rawData => rawData.json())  // Parse as JSON
        .then(entries => {
            journal = entries
        })
}

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (nextEntry, currentEntry) =>
            Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
    )
    return sortedByDate
}

export const saveJournalEntry = (journalEntryObject) => {
    // Use `fetch` with the POST method to add your entry to your API
    fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journalEntryObject)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)  // <-- Broadcast the state change event
}

const eventHub = document.querySelector(".container")
const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}