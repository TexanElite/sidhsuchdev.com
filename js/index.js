var currentCharacterIndex = 0;
var currentStringIndex = 0;
var arrayOfStrings = ["Computer Science Student", "Software Engineer", "Cybersecurity Engineer"];
var writingSpeed = 50;
var deletingSpeed = 30;

function writeDescription() {
    const descriptionElement = document.getElementById('personal-description');
    if (currentCharacterIndex == 0) {
        descriptionElement.innerHTML = '';
    }
    if (currentCharacterIndex < arrayOfStrings[currentStringIndex].length - 1) {
        descriptionElement.innerHTML += arrayOfStrings[currentStringIndex].charAt(currentCharacterIndex);
        currentCharacterIndex++;
        setTimeout(writeDescription, writingSpeed);
    }
    else {
        descriptionElement.innerHTML += arrayOfStrings[currentStringIndex].charAt(currentCharacterIndex);
        setTimeout(deleteDescription, writingSpeed * 50);
    }
}

function deleteDescription() {
    const descriptionElement = document.getElementById('personal-description');
    if (currentCharacterIndex > 0) {
        const text = descriptionElement.innerHTML;
        descriptionElement.innerHTML = text.substring(0, text.length - 1);
        currentCharacterIndex--;
        setTimeout(deleteDescription, writingSpeed);
    }
    else {
        descriptionElement.innerHTML = '&nbsp;'
        currentStringIndex = (currentStringIndex + 1) % arrayOfStrings.length;
        setTimeout(writeDescription, deletingSpeed * 10);
    }
}

window.addEventListener('load', function() { 
    writeDescription();
}, false);