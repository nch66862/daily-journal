import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")
let entries = []

export const JournalEntryList = () => {
    // Use the journal entry data from the data provider component
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

    entryLog.innerHTML = `
            ${journalHTMLRepresentation}
        `
}

const eventHub = document.querySelector(".container") //define what the eventHub will be (needs to be the same across the application)
eventHub.addEventListener("journalStateChanged", Event => {
    JournalEntryList()
})

eventHub.addEventListener("moodChosen", Event => {
    entries = useJournalEntries()
    entries = entries.filter(entry => entry.moodId === Event.detail.moodChosen)
    render(entries)
})