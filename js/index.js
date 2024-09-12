var generateQuoteBtn = document.getElementById("generateQuoteBtn");

generateQuoteBtn.addEventListener("click", generateRandomQuote);
var quotesArray = [
  {
    quote: "“You miss 100% of the shots you don't take.”",
    author: "--Wayne Gretzy",
  },
  {
    quote:
      "“Resentment is like drinking poison and waiting for your enemies to die.”",
    author: "--Nelson Mandela",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "--Mae West",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "--Mahatma Gandhi",
  },
  {
    quote: "“If you tell the truth, you don't have to remember anything.”",
    author: "--Mark Twain",
  },
  {
    quote:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author: "--Mahatma Gandhi",
  },
  {
    quote: "“We accept the love we think we deserve.”",
    author: "--Stephen Chbosky",
  },
];


var previousRanodomIndex = [];

function generateRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotesArray.length);

  while (
    previousRanodomIndex.length > 0 &&
    randomIndex === previousRanodomIndex[0]
  ) {
    randomIndex = Math.floor(Math.random() * quotesArray.length);
  }

  document.getElementById("quote").innerHTML = quotesArray[randomIndex].quote;
  document.getElementById("author").innerHTML = quotesArray[randomIndex].author;

  previousRanodomIndex[0] = randomIndex;
}
