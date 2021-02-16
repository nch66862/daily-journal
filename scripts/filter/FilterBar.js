import { getMoods, useMoods } from "../moods/MoodProvider.js"
import { MoodFilter } from "./MoodFilter.js"
import { TagFilter } from "./TagFilter.js"

let moods = []

export const FilterBar = () => {
    getMoods()
        .then(() => {
            moods = useMoods()
            render(moods)
        })
}

const contentTarget = document.querySelector(".filters")
const render = moods => {
    contentTarget.innerHTML = `
        ${MoodFilter(moods)}
        ${TagFilter()}
    `
}