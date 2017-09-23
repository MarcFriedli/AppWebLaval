class Toast{
    constructor(type){
        this.type = type;
    }

    changeText(text){
        this.text = (text !== '') ? text : "I'm a toast without love. Nobody want to give me a text T_T";
    }

    display(){
        document.getElementById("Toast-zone").innerHTML += '<div class="toast ' + this.type + '">' + this.text + '</div>'
    }
}

export {Toast}