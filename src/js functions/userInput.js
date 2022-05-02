import { displayProjectInputBox, displayTaskInputBox } from "./prompt"
import {submit, cancel, submitTask, cancelTask} from "./eventAction"
import storage from "./storage"

function getInput() {

    switch (this.id) {
        case "addProject":
            displayProjectInputBox()
            submit()
            cancel()
    }
}

function getTaskInput() {
    displayTaskInputBox()
    submitTask(storage.getProject(event.target))
    cancelTask()
}

export {getInput, getTaskInput}