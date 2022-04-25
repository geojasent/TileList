import storage from "../storage";
import { displayProjectInputBox } from "./prompt";
import { domManipulation} from "./domManipulation";

function addClickListener() {
    // const buttonClick = document.querySelector("button")
    // buttonClick.addEventListener("click", () => {
    //     submit()
    // });
}

function removeClickListener() {
    
}

function clearContents() {
    for (let text of document.querySelectorAll("input")) {
        text.value = ""
    };
}

function submit() {
    const sumbitButton = document.getElementById("submit");
    sumbitButton.onclick = () => {
        storage.addProjectStorage()
        //update dom sidebar with project name
        clearContents()
        displayProjectInputBox()
    }
};

function cancel() {
    const cancelButton = document.getElementById("cancel");
    cancelButton.onclick = () => {
        clearContents()
        displayProjectInputBox()
    };
}

export {addClickListener, submit, cancel}