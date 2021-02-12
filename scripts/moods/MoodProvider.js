let moods = []

export const getMoods = () => {
    return fetch("http://localhost:8088/moods") // Fetch from the API
        .then(rawData => rawData.json())  // Parse as JSON
        .then(entries => {
            moods = entries
        })
}

export const useMoods = () => {
    return moods.slice()
}
