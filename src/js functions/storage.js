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
    },

    getProject(element) {
        return element.parentNode.dataset.task
    },

    addTaskStorage(taskName) {
        let storageName = taskName.substring(4) //taskname sometimes undefined
        let data = JSON.parse(localStorage.getItem(storageName))
        let length = Object.keys(data).length
        const task = document.getElementById('task').value
        console.log(length)
        data[`task${length-1}`] = task

        localStorage.setItem(storageName, JSON.stringify(data))
    },

    removeTaskStorage(task) { //make this remove task from project
        localStorage.removeItem(task)
    }
}

export default storage