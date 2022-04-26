import storage from "../storage";
import { displayProjectInputBox } from "./prompt";
import { domManipulation, projectBox} from "./domManipulation";

function addClickListener() {
    // const buttonClick = document.querySelector("button")
    // buttonClick.addEventListener("click", () => {
    //     submit()
    // });
}

function removeClickListener() {
    
}

function clearInput() {
    for (let text of document.querySelectorAll("input")) {
        text.value = ""
    };
}

function submit() {
    const sumbitButton = document.getElementById("submit");
    sumbitButton.onclick = () => {
        if (document.getElementById("projectName").value == "" || document.getElementById("projectDescription").value == "") {
            alert("Project Name or Project Description cannot be blank")
        } else {
        storage.addProjectStorage()
        projectBox()
        clearInput()
        displayProjectInputBox()
        }
    }
};

function projectDelete() {
    storage.removeProjectStorage(event.target.parentNode.id)
    projectBox()
}

function cancel() {
    const cancelButton = document.getElementById("cancel");
    cancelButton.onclick = () => {
        clearInput()
        displayProjectInputBox()
    };
}

export {addClickListener, submit, projectDelete, cancel}