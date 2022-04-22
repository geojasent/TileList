import { displayProjectInputBox } from "./prompt"
import {submit, cancel, addClickListener} from "./eventAction"

function getInput() {

    switch (this.id) {
        case "addProject":
            displayProjectInputBox()
            addClickListener()
            submit()
            cancel()
    }
}
export {getInput}