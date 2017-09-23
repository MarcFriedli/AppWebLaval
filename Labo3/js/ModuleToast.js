class Toast{
    constructor(type){
        this.type = type;
    }

    changeText(text){
        this.text = (text !== '') ? text : "I'm a toast without love. Nobody want to give me a text T_T";
    }

    display(){
        this.elem = document.createElement("div");
        this.elem.classList.add("toast");
        this.elem.classList.add(this.type);
        this.elem.appendChild(document.createTextNode(this.text));
        const currentDiv = document.getElementById("Toast-zone");
        document.body.insertBefore(this.elem, currentDiv);
    }

    hide(){
        this.elem.parentNode.removeChild(this.elem);
    }
}

export {Toast}