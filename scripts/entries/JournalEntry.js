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
        </section>
            `
        }