import { deleteJournalEntry } from "./JournalDataProvider.js"

export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p>date:</p>
            <p>${entry.date}</p>
            <p>concepts:</p>
            <p>${entry.concept}</p>
            <p>things I learned:</p>
            <p>${entry.learned}</p>
            <p>my plans:</p>
            <p>${entry.plans}</p>
            <p>mood:</p>
            <p>${entry.mood.label}</p>
            <button id="deleteEntryButton--${entry.id}">Delete</button>     
        </section>
            `
}

const eventHub = document.querySelector(".container") //define what the eventHub will be (needs to be the same across the application)
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntryButton--")) {
        const [prefix, noteID] = clickEvent.target.id.split("--")
        deleteJournalEntry(noteID)
    }
})