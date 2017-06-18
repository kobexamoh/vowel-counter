// so.
//
// the goal is to make a vowel counter thing that looks at what the user has entered,
// and then return the number of vowels.
// it was part of the python assignment, but seeing as we're on vacation and a bit behind,
// i figured i'd attempt it in the program language i'm (sorta kinda) familiar with.
// here's the twist - i have no internet connection.
//
// yeah.

// so, i have until we go for dinner (probably around 7:30/8:00 PM) and until we log into the
// internet tonight (around 9:30 PM) to get it right and working.

// no pressure, really.

// um...I CANNOT remember how to style a form.
//
// I could check my old notes, but maybe let's worry about the content before the presentation.

// ...okay, it's back to the notes to check out how to style a form. brb.

// okay. form status? complete. styling status? ...eh.

// i just realized that i have no idea if i'm writing "good" code because I can't validate it.

// ugh.

// oh hell yeah! okay - we've always been taught to use "document.querySelector" but I've seen
// some texts use "document.getElementById". And seeing as the form's input tag has
// an id attribute...I'm gonna break the rules and do it.

// Sorry Nathan.

// okay, less snarky comments now - here's the JS required to do this thing.


// --------------------------------------------------------------------------------- //

// variable declarations
var userInput = document.getElementById('inputField');
var userButton = document.querySelector('.submit-button');
var message = document.querySelector('.message');
var errorMessage = document.querySelector('.error-message');
var updatingVowels = document.querySelector('.vowels-go-here');
var vowelCount = 0;

// currently un-needed because I'm using innerText to update the span.
// but there are issues around this method, so I'll have to investigate a bit later.
// var userFacingTextNode;

// event listener
userButton.addEventListener('click', vowelTracker);

// function
function vowelTracker(evt) {
    for (var i = 0; i < userInput.value.length; i++) {

        // does it contain vowels?
        // if it contains a vowel, this happens...
        if (userInput.value[i] == 'a' | userInput.value[i] == 'A') {
            // hide the error message if it's already showing for some reason
            errorMessage.classList.add('hidden');
            // increase the vowel counter by one
            vowelCount++;
            // place the contents of the vowelCount into the span we created
            updatingVowels.innerText = vowelCount;
            // reveal the span (since it's hidden)
            updatingVowels.classList.remove('hidden');
            // reveal the display message
            message.classList.remove('hidden');
        } else if (userInput.value[i] == 'e' | userInput.value[i] == 'E') {
            // hide the error message if it's already showing for some reason
            errorMessage.classList.add('hidden');
            // increase the vowel counter by one
            vowelCount++;
            // place the contents of the vowelCount into the span we created
            updatingVowels.innerText = vowelCount;
            // reveal the span (since it's hidden)
            updatingVowels.classList.remove('hidden');
            // reveal the display message
            message.classList.remove('hidden');
        } else if (userInput.value[i] == 'i' | userInput.value[i] == 'I') {
            // hide the error message if it's already showing for some reason
            errorMessage.classList.add('hidden');
            // increase the vowel counter by one
            vowelCount++;
            // place the contents of the vowelCount into the span we created
            updatingVowels.innerText = vowelCount;
            // reveal the span (since it's hidden)
            updatingVowels.classList.remove('hidden');
            // reveal the display message
            message.classList.remove('hidden');
        } else if (userInput.value[i] == 'o' | userInput.value[i] == 'O') {
            // hide the error message if it's already showing for some reason
            errorMessage.classList.add('hidden');
            // increase the vowel counter by one
            vowelCount++;
            // place the contents of the vowelCount into the span we created
            updatingVowels.innerText = vowelCount;
            // reveal the span (since it's hidden)
            updatingVowels.classList.remove('hidden');
            // reveal the display message
            message.classList.remove('hidden');
        } else if (userInput.value[i] == 'u' | userInput.value[i] == 'U') {
            // hide the error message if it's already showing for some reason
            errorMessage.classList.add('hidden');
            // increase the vowel counter by one
            vowelCount++;
            // place the contents of the vowelCount into the span we created
            updatingVowels.innerText = vowelCount;
            // reveal the span (since it's hidden)
            updatingVowels.classList.remove('hidden');
            // reveal the display message
            message.classList.remove('hidden');
        }
    }

    // a check before displaying the other error message.
    // if it DOESN'T contain vowels, this occurs:
    if (vowelCount != 0) {
        // in the odd event that the error message is, in fact, visible
        errorMessage.classList.add('hidden');
        console.log('all is well.');
    } else {
        // hide the vowel count message if it hasn't been hidden yet.
        message.classList.add('hidden');
        // reveal the error message
        errorMessage.classList.remove('hidden');
    }

    // reset the vowel count (in the event that the user presses 'enter' or 'submit' multiple times)
    vowelCount = 0;

    // prevent the page from actually reloading/submitting the form
    evt.preventDefault();
};


// known issues: changing the "tense" of the display phrase if there's only one vowel