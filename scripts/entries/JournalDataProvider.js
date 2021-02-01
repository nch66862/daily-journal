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