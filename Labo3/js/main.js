import{Toast} from "./ModuleToast.js";

window.createToast = createToast;

console.log("Test");

function createToast(type){
    let toast = new Toast(type);
    let inputText = document.getElementById('Input-text').value;
    toast.changeText(inputText);
    toast.display();
    setTimeout(function(){console.log("Times out !"); toast.hide();}, 3000);
}