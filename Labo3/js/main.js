import{Toast} from "./ModuleToast.js";

window.createToast = createToast;

console.log("Test");

function createToast(type){
    let toast = new Toast(type);
    toast.display();
}