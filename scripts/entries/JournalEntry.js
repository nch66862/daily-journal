export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p>date:</p>
            <p>${entry.date}</p>
            <p>concepts:</p>
            <p>${entry.concept}</p>
            <p>things I learned:</p>
            <p>${entry.entry}</p>
            <p>mood:</p>
            <p>${entry.mood}</p>        
        </section>
            `
        }