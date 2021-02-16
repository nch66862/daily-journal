export const TagFilter = () => {
    return `
        <fieldset class="fieldset">
            <legend>Search For a Tag</legend>
            <input id="search-tags" type="text" name="tagSearch">
            <button id="tagFilter">Search</button>
        </fieldset>
        `
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("click", clickEvent => {
    if (changeEvent.target.id === "tagFilter") {
        const customEvent = new CustomEvent("tagSearchedEntered", {
            detail: {
                keyword: changeEvent.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})