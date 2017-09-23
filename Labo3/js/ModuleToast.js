class Toast{
    constructor(type){
        this.type = type;
    }

    set changeText(text){
        this.text = text;
    }

    display(){
        document.getElementById("Toast-zone").innerHTML += '<div class="toast ' + this.type + '">You created a toast using ' + this.type + '</div>'
    }
}

export {Toast}