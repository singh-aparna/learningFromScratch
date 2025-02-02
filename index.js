document.getElementById("h1")//Fetches the DOM element with the ID h1.
    .textContent = "Hi, World!";//Sets the text content of that element to "Hi".

document.getElementById("h2")//Fetches the DOM element with the ID h1.
    .innerHTML = "Learn from scratch!!";//Sets the text content+h1 element of that element to "Hi".

document.getElementsByClassName("h3")[0]
    .textContent = "Learn Javascript!";

//✅ getElementById("id") → Returns a single element (HTMLElement). //ID's are unique
//✅ getElementsByClassName("class") → Returns an HTMLCollection (like an array) of all matching elements.

const querySelectorAll = document.querySelectorAll(".h3");
console.log(querySelectorAll);


// Key Differences:
// querySelector is used for selecting the first match, while querySelectorAll selects all matches.
// querySelectorAll returns a NodeList (which can be looped over), whereas querySelector returns a single element.
//Parameters Accepted by querySelector():
//CSS Selector: It can be any valid CSS selector, such as class, ID, tag, attribute, or pseudo-classes.