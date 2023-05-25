import { setOwnsBlueJeans } from "./TransientState.js"

/*
    Responsibility: 
    Provide UI controls for survey taker to choose 'yes' or 'no' for
    ownership of blue jeans

    Strategy:
    A component function that produces HTML for two radio buttons for 'Yes' and 'No'

*/

export const OwnJeansChoices = () => {

    document.addEventListener("change", handleOwnershipChange)

    let html = "<h1>Do you own a pair of blue jeans?</h1>"
    html += "<input type='radio' name='owns' value='true' /> Yes"
    html += "<input type='radio' name='owns' value='false' /> No"

    return html
}

 /*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
const handleOwnershipChange = (changeEvent) => {
        if (changeEvent.target.name === "ownsJeans") {
            const convertedToBoolean = JSON.parse(changeEvent.target.value)
            setOwnsBlueJeans(convertedToBoolean)
        }
    }