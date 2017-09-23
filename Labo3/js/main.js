import{Toast} from "./ModuleToast.js";

window.createToast = createToast;

console.log("Test");

function createToast(type){
    let toast = new Toast(type);
    let inputText = document.getElementById('Input-text').value;
    toast.changeText(inputText);
    toast.display();
    setInterval(function(){/*Todo, hide the toast*/}, 3000);
}