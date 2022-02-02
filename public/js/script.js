/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
let index;
const quotes = [
    {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love",
        source: "Albus Dumbledore",
        citation: "Harry Potter and the Deathly Hallows",
        year: "2010"
        
    },
    {
        quote: "It is impossible to manufacture or imitate love",
        source: "Horace Slughorn",
        citation: "Harry Potter and the Half-Blood Prince"
    },
    {
        quote: "Love as powerful as your mother’s for you leaves it’s own mark. To have been loved so deeply, even though the person who loved us is gone, will give us some protection forever.",
        source: "Albus Dumbledore"
    },
    {
        quote: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
        source: "Albus Dumbledore"
    },
    {
        quote: "Numbing the pain for a while will make it worse when you finally feel it.",
        source: "Albus Dumbledore"
    },
    {
        quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
        source: "Sirius Black"
    },
    {
        quote: "I am what I am, an' I'm not ashamed. 'Never be ashamed,' my ol' dad used ter say, 'there's some who'll hold it against you, but they’re not worth botherin’ with.",
        source: "Rubeus Hagrid"
    }
]


/***
 * `getRandomQuote` function
***/ 
function getRandomQuote() {
    // 1. Create a variable that generates a random number 
    // between zero and the last index in the `quotes` array
    let random = Math.floor(Math.random() * quotes.length);

    while(index === random) {
        random = Math.floor(Math.random() * quotes.length);

        if (index !== random) {
        break;
        }
    }

    // 2. Use the random number variable and bracket notation 
    // to grab a random object from the `quotes` array, and
    // store it in a variable
    const q = quotes[random];

    // 3. Return the variable storing the random quote object
    return q;
}

// console.log(getRandomQuote());

/***
 * `printQuote` function
***/
function printQuote() {
    let randomQuote = getRandomQuote();
    let str = "<p class='quote'>" + randomQuote.quote + "</p> <p class='source'>" + randomQuote.source;

    if (randomQuote.citation) {
        str += "<span class='citation'>" + randomQuote.citation + "</span>";
    } 
    if (randomQuote.year) {
        str += "<span class='year'>" + randomQuote.year + "</span>";
    }

    document.getElementById('quote-box').innerHTML = str + "</p>";
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click", function() {
    printQuote();
})