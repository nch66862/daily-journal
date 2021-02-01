import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")

export const JournalEntryList = () => {
    // Use the journal entry data from the data provider component
    let entries = []
    getEntries()
        .then(() => {
            entries = useJournalEntries()
            render(entries)
        })

}

const render = journalEntryArray => {
    let journalHTMLRepresentation = ""
    for (const entry of journalEntryArray) {
        journalHTMLRepresentation += JournalEntryComponent(entry)
    }

    entryLog.innerHTML += `
            ${journalHTMLRepresentation}
        `
}