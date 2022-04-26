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
    
    removeProjectStorage(projectName) {
        localStorage.removeItem(projectName)
    }
}

export default storage