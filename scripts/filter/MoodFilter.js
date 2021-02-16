export const MoodFilter = (allMoods) => {
    return `
        <fieldset class="fieldset">
            <legend>Filter Journal Entries by Mood</legend>
            ${allMoods.map((mood) => {
                return `
                <div class="moodRadioButton">
                <input type="radio" name="moodFilter" value="${mood.id}"/>
                <label for="moodFilter--happy">${mood.label}</label>
                </div>
            `
            }).join("")}
        </fieldset>
        `
}