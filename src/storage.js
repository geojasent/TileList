const storage = {

    addProjectStorage() {
        const projectName = document.getElementById("projectName").value
        const projectDescription = document.getElementById("projectDescription").value

        const project = {
            "Name": projectName,
            "Description": projectDescription
        }

        localStorage.setItem(projectName, JSON.stringify(project))
    },
    
    removeProjectStorage() {
        const projectName = document.getElementById("projectName")
        const projectDescription = document.getElementById("projectDescription")
        localStorage.removeItem("projectName", projectName)
        localStorage.removeItem("projectDescription", projectDescription)
    }
}

export default storage