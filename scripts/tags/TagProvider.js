let allTags = []

export const getTags = () => {
    return fetch("http://localhost:8088/tags") // Fetch from the API
    .then(rawData => rawData.json())  // Parse as JSON
    .then(tags => {
        allTags = tags
    })
}

export const useTags = () => {
    return allTags.slice()
}

export const findTag = (subject) => {
    return fetch(`${settings.apiURL}/tags?subject=${subject}`)
        .then(response => response.json())
}

export const saveTag = newTag => {
    // Use `fetch` with the POST method to add your entry to your API
    fetch("http://localhost:8088/tags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTag)
    })
    .then(getTags)
    .then(dispatchStateChangeEvent)  // <-- Broadcast the state change event
}

const eventHub = document.querySelector(".container")
const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("tagStateChanged"))
}