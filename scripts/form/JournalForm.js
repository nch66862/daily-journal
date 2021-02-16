import { saveJournalEntry } from '../entries/JournalDataProvider.js'
import { getMoods, useMoods } from '../moods/MoodProvider.js'
import { getTags, saveTag, useTags } from '../tags/TagProvider.js'

const contentTarget = document.querySelector(".journalEntryContainer")

const render = (moodsArray) => {
    contentTarget.innerHTML = `
    <fieldset>
        <label for="journalDate">Date of entry</label>
        <input id="entry-date" type="date" name="date">
    </fieldset>
    <fieldset>
        <label for="conceptsCovered">Concepts covered</label>
        <input id="entry-concept" type="text" name="concept">
    </fieldset>
    <fieldset>
        <label for="dailyGrowth">What did I learn to do?</label>
        <input id="entry-learned" type="textarea" name="entry">
    </fieldset>
    <fieldset>
        <label for="plans">What are my plans for tomorrow?</label>
        <input id="entry-plans" type="textarea" name="plan">
    </fieldset>
    <fieldset>
        <label for="feelings">How am I feeling about development today?</label>
        <select name="mood" id="entry-mood">
        <option value="0">Please Select One</option>
        ${moodsArray.map(mood => `<option value="${mood.id}">${mood.label}</option>`)}
        </select>
    </fieldset>
    <fieldset>
        <label for="tags">Tags</label>
        <input id="entry-tags" type="text" name="tag">
    </fieldset>
    <button id="saveJournalEntry">Save Entry</button>
`
}

export const JournalForm = () => {
    getMoods()
        .then(() => {
            const arrayOfMoods = useMoods()
            render(arrayOfMoods)
        })
}

// Handle browser-generated click event in component
const eventHub = document.querySelector(".container") //define what the eventHub will be (needs to be the same across the application)
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveJournalEntry") {
        clickEvent.preventDefault()
        // Make a new object representation of a note
        const tagInputArray = document.getElementById("entry-tags").value.split(",")
        getTags()
        .then(() => {
            let existingTagArray = useTags()
            tagInputArray.map(tag => {
                const matchingTag = existingTagArray.find(tagObj => tagObj.subject === tag)
                if (matchingTag === undefined) {
                    const newTag = newTagObject(tag)
                    saveTag(newTag)
                    .then(() => {
                        let existingTagArray = useTags()
                        const newTagId = existingTagArray.find(tagObj => tagObj.subject === tag).id
                        console.log('newTagId: ', newTagId);
                    })
                }
            })
        })
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
        document.getElementById("entry-tags").value = ""
}
})

const newTagObject = newTag => {
    return {
        subject: newTag
    }
}