import storage from "./storage";
import { displayProjectInputBox, displayTaskInputBox } from "./prompt";
import { domManipulation, projectBox, taskBox} from "./domManipulation";

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
        if (document.getElementById("projectName").value === "" || document.getElementById("projectDescription").value == "") {
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

function submitTask() {
    const submitTask = document.getElementById('submitTask')
    submitTask.onclick = () => {
        if (document.getElementById('task').value === '') {
            alert('Task cannot be empty')
        } else {
            storage.addTaskStorage(storage.getProject(event.target))
            taskBox() //need to make this display tasks
            clearInput()
            displayTaskInputBox()
        }
    }
}

function cancelTask() {
    const cancelTask = document.getElementById('cancelTask')
    cancelTask.onclick = () => {
        clearInput()
        displayTaskInputBox()
    }
}

export {addClickListener, submit, projectDelete, cancel, submitTask, cancelTask}