function wordCounter() {
    let words = document.getElementById("wordtext").value;
    let count = 0;

    //Space will split the words
    let split = words.split(' ');

    //Loop through text and when non empty split, add 1 to counter
    for (let i=0; i<split.length; i++) {
        if (split[i] != "") {
            count +=1;
        }
    }
    //Display words
    document.getElementById("show").innerHTML = count;
}
