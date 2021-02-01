import { JournalEntryList } from "./JournalEntryList"

let journal = []

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(rawData => rawData.json())  // Parse as JSON
        .then(entries => {
            journal = entries
        })
}

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

const saveJournalEntry = (journalEntryObject) => {
    // Use `fetch` with the POST method to add your entry to your API
fetch("fill this in with the URL to your API posts resource", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(journalEntryObject)
})
    .then(JournalEntryList())  // <-- Get all journal entries
    .then(dispatchStateChangeEvent())  // <-- Broadcast the state change event
}

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}