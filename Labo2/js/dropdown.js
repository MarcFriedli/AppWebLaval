//TODO : make a namespace

var searchString = "";

var characterArray = ["Adele", "Mateo", "Louis", "Pierre", "Alfred", "Ophélie", "Valentine", "Daniel", "Maria", "Adrien"];
characterArray.sort();

function dropdownSearch(event){
    //TODO : currently the application don't take account of the delete key... fix it.
    var charNum = event.charCode;
    searchString = searchString + String.fromCharCode(charNum);
    searchPossibilities(searchString);
}

function resetSearch(){
    searchString = "";
    console.log("Reseted !");
    document.getElementById("Dropdown-search").value="";
    document.getElementById("Dropdown-possibilities").innerHTML="Select a character"; //todo : not DRY
}

function searchPossibilities(searchString){
    var possibilities = [];
    characterArray.forEach(function(character){
        if(character.includes(searchString)){
            possibilities.push(character);
        }
    });
    displayPossibilities(possibilities);
}

function displayPossibilities(possibilities){
    var finalString = "";
    if (possibilities.length === 0) {
        finalString = "Character unknown..."
    }
    else{
        possibilities.forEach(function(possibilitie){
            finalString = finalString + "<p class=\"possibility-element\" onclick=\"approveElement()\">" + possibilitie + "</p>";
        });
    }
    document.getElementById("Dropdown-possibilities").innerHTML=finalString;
}

//When the client click on a possibilitie
function approveElement(element){
    //TODO
}