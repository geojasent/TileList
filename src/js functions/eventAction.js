import storage from "../storage";
import { displayProjectInputBox } from "./prompt";

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
        console.log("submit")
        storage.addStorage()
        clearContents()
        displayProjectInputBox()
    }
};

function cancel() { //why is this not closing on second cancel
    const cancelButton = document.getElementById("cancel");
    cancelButton.onclick = () => {
        console.log("Cancel")
        displayProjectInputBox()
    };
}

export {addClickListener, submit, cancel}