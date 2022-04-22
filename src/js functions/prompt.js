import { submit, cancel } from "./eventAction";

function displayProjectInputBox() {
    //show project input panel
    const projectPrompt = document.getElementById("projectPromptContainer")
    const projectPromptDisplay = projectPrompt.style.display

    if (projectPromptDisplay === "block") {
        projectPrompt.style.display = "none";
    } else {
        projectPrompt.style.display = "block";
    }
}

export {displayProjectInputBox}