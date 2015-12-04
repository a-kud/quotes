function randomQuoteGenerator() {
/**Returns two element array with quote and its' author at random order*/

    "use strict";
    var quotes = {
    "1": {"quote": "If that makes any sense to you, you have \
a big problem.",
         "author": "C. Durance"},
    "2": {"quote": "Let's make ethanol green this afternoon.",
         "author": "R. Friesen"},
    "3": {"quote": "I think it is true for all n. I was just playing it \
safe with n>=3 because I couldn't remember the proof.",
         "author": "Baker"},
    "4": {"quote": "Every prof blows this. We're all going \
to get AIDS or something.",
         "author": "J. Vanderkooy"},
    "5": {"quote": "You can bring any calculator you like to the midterm, \
as long as it doesn't dim the lights when you turn it on.",
          "author": "Hepler Systems Design"},
    "6": {"quote": "You have to regard everything I say with suspicion - \
I may be trying to bullshit you, or I may just be bullshitting you \
inadvertantly.",
          "author": "J. Wainwright"},
    "7": {"quote": "You can bring any calculator you like to the midterm,\
as long as it doesn't dim the lights when you turn it on.",
          "author": "Hepler Systems Design"},
    "8": {"quote": "You have to regard everything I say with suspicion -\
I may be trying to bullshit you, or I may just be bullshitting you \
inadvertantly.",
          "author": "J. Wainwright"},
    "9": {"quote": "Pascal is Pascal is Pascal is dog meat.",
          "author": "M. Devine and P. Larson"},
    "10": {"quote": "We'll call it S for cyclic.",
          "author": "Gord Sinnamon Mathematics"},
    "11": {"quote": "Karen has her own i, and she is not going to let \
Frank put his data into it.",
          "author": " F. D. Boswell"},
    "12": {"quote": "All that was meant to bore you shitless.",
          "author": "I. Goulden"},
    "13": {"quote": "The subspace W inherits the other 8 properties of \
V. And there aren't even any property taxes.",
          "author": "J. MacKay"},
    "14": {"quote": "So you have this mapping P(v). So what does it mean? \
It means you take v and 'P' on it, right?",
          "author": "J. Baker"},
    "15": {"quote": "That's an engineer on his work term. He's sawing \
pipes, then soldering them back together again... \
He'll do that 10 times to make the pipe shorter.",
         "author": "J. MacKay"},
    "16": {"quote": "The algorithm to do that is extremely nasty. \
You might want to mug someone with it?",
         "author": "M. Devine"}
};
    var numberOfQuotes = Object.keys(quotes).length;
    var indexRandom = Math.floor(Math.random() * (numberOfQuotes - 1 + 1)) + 1;
    return [quotes[indexRandom].quote, quotes[indexRandom].author];
}
function writeQuote() {
    "use strict";
    // single var pattern
    var quoteAndAuthor = randomQuoteGenerator(),
        paragraph = document.createElement("p"),
        quote = document.createTextNode(quoteAndAuthor[0]),
        author = document.createTextNode(quoteAndAuthor[1]),
        lineBreak = document.createElement("br"),
        element = document.getElementById("quote"),
        italics = document.createElement("i");
    
    // delete previous quote if present
    if (element.firstChild !== null) {
        element.removeChild(document.getElementById("random_quote"));
    }
    paragraph.id = "random_quote";
    paragraph.appendChild(quote);
    paragraph.appendChild(lineBreak);
    paragraph.appendChild(italics);
    italics.appendChild(author);
    element.appendChild(paragraph);
}

function tweetQuote() {
    "use strict"
    var quote = document.getElementById("quote").textContent,
        url = "https://twitter.com/intent/tweet?text=";
    // compose twitter link for a tweet
    document.getElementById("tweet-quote").href = url + quote;
}