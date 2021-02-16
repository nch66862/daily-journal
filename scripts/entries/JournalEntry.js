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
            <button id="deleteEntryButton---${entry.id}">Delete</button>     
        </section>
            `
        }

const eventHub = document.querySelector(".container") //define what the eventHub will be (needs to be the same across the application)
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntryButton")) {
        clickEvent.preventDefault()
        // Make a new object representation of a note
        const newEntry = {
            date: document.getElementById("entry-date").value,
            concept: document.getElementById("entry-concept").value,
            learned: document.getElementById("entry-learned").value,
            plans: document.getElementById("entry-plans").value,
            moodId: parseInt(document.getElementById("entry-mood").value)
        }
        // Change API state and application state
        saveJournalEntry(newEntry)
        document.getElementById("entry-date").value = ""
        document.getElementById("entry-concept").value = ""
        document.getElementById("entry-learned").value = ""
        document.getElementById("entry-plans").value = ""
        document.getElementById("entry-mood").value = ""
}
})