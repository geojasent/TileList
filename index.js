import './style.css';
console.log("hello")
function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.innerHTML = ("hello");
 
   element.classList.add('hello');
 
    return element;
  }
 
  document.body.appendChild(component());