export const findTag = (subject) => {
    return fetch(`${settings.apiURL}/tags?subject=${subject}`)
        .then(response => response.json())
}