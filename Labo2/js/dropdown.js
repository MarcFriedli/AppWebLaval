//TODO : make a namespace

var characterArray = ["Adele", "Mateo", "Louis", "Pierre", "Alfred", "Ophélie", "Valentine", "Daniel", "Maria", "Adrien"];
characterArray.sort();

function dropdownSearch(searchString){
    var possibilities = [];
    characterArray.forEach(function(character){
        if(character.toLowerCase().includes(searchString.toLowerCase())){
            possibilities.push(character);
        }
    });
    displayPossibilities(possibilities);
}

function showAll(){
    displayPossibilities(characterArray);
}

function displayPossibilities(possibilities){
    var finalString = "";
    possibilities.forEach(function(possibilitie){
        //Show all the characters possible with the onclick option
        finalString = finalString + "<p class='possibility-element' " +
            "onclick='selectElement(\"" + possibilitie + "\")'> " +
            possibilitie +
            "</p>";
    });
    setDropdownPossibilitiesValues(finalString);
}

function selectElement(character){
    //character == '' for the reset
    setDropdownSearchValue(character);
    setDropdownPossibilitiesValues("");
}

function setDropdownSearchValue(text){
    document.getElementById("DropdownSearch").value=text;
}

function setDropdownPossibilitiesValues(text){
    document.getElementById("DropdownPossibilities").innerHTML=text;
}