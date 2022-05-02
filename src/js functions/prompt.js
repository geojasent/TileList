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
function displayTaskInputBox() {
    //show project input panel
    const taskPrompt = document.getElementById("taskPromptContainer")
    const taskPromptDisplay = taskPrompt.style.display

    if (taskPromptDisplay === "block") {
        taskPrompt.style.display = "none";
    } else {
        taskPrompt.style.display = "block";
    }
}

export {displayProjectInputBox, displayTaskInputBox}