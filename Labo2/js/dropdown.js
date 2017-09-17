//TODO : make a namespace

var searchString = "";

var characterArray = ["Adele", "Mateo", "Louis", "Pierre", "Alfred", "Ophélie", "Valentine", "Daniel", "Maria", "Adrien"];
characterArray.sort();

function dropdownSearch(event){
    //TODO : currently the application don't take account of the delete key... fix it.
    var charNum = event.charCode;
    searchString = searchString + String.fromCharCode(charNum);
    console.log(searchString);
    searchPossibilities(searchString);
}

function resetSearch(){
    searchString = "";
    setDropdownSearchValue("");
    setDropdownPossibilitiesValues("");
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

function showAll(){
    displayPossibilities(characterArray);
}

function displayPossibilities(possibilities){
    //TODO : take the character name to the function when clicked
    var finalString = "";
    possibilities.forEach(function(possibilitie){
        finalString = finalString + "<p class=\"possibility-element\" onclick=\"setDropdownSearchValue()\">" + possibilitie + "</p>";
    });
    setDropdownPossibilitiesValues(finalString);
}

function setDropdownSearchValue(text){
    document.getElementById("DropdownSearch").value=text;
}

function setDropdownPossibilitiesValues(text){
    document.getElementById("DropdownPossibilities").innerHTML=text;
}