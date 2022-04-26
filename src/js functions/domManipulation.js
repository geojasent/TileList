import { projectDelete } from "./eventAction";
import { displayProjectInputBox } from "./prompt";
import {getInput} from "./userInput";

  //to create _sidebar contents and main
  const domFactory = (type, name, attribute) => {
    const element = document.createElement(type);
    if (name !== "" || attribute !== "") {
        element.setAttribute(name, attribute)
    };
    return element
}

const domManipulation = () => {

    //use this to delete dom
    const deleteProject = () => {

    }

    //Sidebar
    const body = document.querySelector("body")

        body.appendChild(domFactory("div", "id", "sidebarContainer"))
        document.getElementById("sidebarContainer")

        const _sidebar = document.getElementById("sidebarContainer")
        _sidebar.appendChild(domFactory("section", "id", "logoContainer"))
            
            const _logoContainer = document.getElementById("logoContainer")
            //add logo
            _logoContainer.appendChild(domFactory("span", "id", "logo")).innerHTML = "LOGO IMAGE"
            _logoContainer.appendChild(domFactory("span", "id", "logoText")).innerHTML = "TiList"

            _sidebar.appendChild(domFactory("div", "id", "projectBreak"))
            _sidebar.appendChild(domFactory("section", "id", "projectContainer"))
            
            const _projectContainer = document.getElementById("projectContainer")
            
            _projectContainer.appendChild(domFactory("div", "id", "projects"))
            _projectContainer.appendChild(domFactory("p", "id", "addProject"))
            
            const _addProject = document.getElementById("addProject")
            _addProject.appendChild(domFactory("p", "id", "plusIcon")).innerHTML = "+"
            _addProject.appendChild(domFactory("span", "id", "add")).innerHTML = "Add Project"
            _addProject.addEventListener("click", getInput)
            
            //Main
            body.appendChild(domFactory("div", "id", "mainContainer"))
            document.getElementById("mainContainer").innerHTML = "This is a project"
            
    projectBox();
}

function projectBox() {
    const _projects = document.getElementById("projects")
    _projects.innerText = ""

    Object.keys(localStorage).forEach(function(key){
        _projects.appendChild(domFactory("div", "id", key))
        document.getElementById(key).innerHTML = key
        document.getElementById(key).setAttribute("class", "projectName")
        document.querySelectorAll(".projectName").forEach(function(item) {
            item.onclick = () => {
                if (event.target.className == "projectName") {
                    displayProject(event.target)
                }
            }
        });

            const innerProject = document.getElementById(key)
            innerProject.appendChild(domFactory("button", "id", "projectDelete")).innerHTML = "delete icon?"
            document.querySelectorAll("button").forEach(function(button) {
                button.onclick = () => {
                    projectDelete()
                }
            });
    });
}

function displayProject(proj) {
    const mainContainer = document.getElementById("mainContainer")
    mainContainer.innerHTML = ""

    var projName = JSON.parse(localStorage.getItem(proj.id)).Name
    mainContainer.appendChild(domFactory("section", "id", projName)).innerHTML = projName
   
    var projDesc = JSON.parse(localStorage.getItem(proj.id)).Description
    mainContainer.appendChild(domFactory("section", "id", projDesc)).innerHTML = projDesc
}

export {domManipulation, projectBox}