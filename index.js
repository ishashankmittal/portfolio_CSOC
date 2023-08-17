const quotableUrl = 'https://api.quotable.io/random';

async function fetchData() {
    try {
        const response = await fetch(quotableUrl);
        const data = await response.json();

        const authorElement = document.getElementById('author');
        const quoteElement = document.getElementById('quote');

        authorElement.textContent = data.author;
        quoteElement.textContent = data.content;
    } catch (error) {
        console.error(error);
    }
}

const newQuoteButton = document.getElementById('new-quote-button');
newQuoteButton.addEventListener('click', fetchData);

fetchData();
