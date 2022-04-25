import {getInput} from "./userInput";

const domManipulation = () => {

    //to create _sidebar contents and main
    const domFactory = (type, name, attribute) => {
        const element = document.createElement(type);
        if (name !== "" || attribute !== "") {
            element.setAttribute(name, attribute)
        };
        return element
    }

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
            
                //Project box for each project
                const _projects = document.getElementById("projects")

                var projectBox = function() {
                    Object.keys(localStorage).forEach(function(key){
                        _projects.appendChild(domFactory("span", "id", key))
                        document.getElementById(key).innerHTML = key
                        console.log("test")
                    });
                    return projectBox
                }();

            _projectContainer.appendChild(domFactory("p", "id", "addProject"))
            
            const _addProject = document.getElementById("addProject")
            _addProject.appendChild(domFactory("p", "id", "plusIcon")).innerHTML = "+"
            _addProject.appendChild(domFactory("span", "id", "add")).innerHTML = "Add Project"
            _addProject.addEventListener("click", getInput)
            
            //Main
            body.appendChild(domFactory("div", "id", "mainContainer"))
            document.getElementById("mainContainer").innerHTML = "This is a project"
            
}
export {domManipulation}