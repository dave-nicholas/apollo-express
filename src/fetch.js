import fetch from 'node-fetch';

export const Quote = {
  getOne: () => {
    return fetch(
      'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
    )
      .then(response => response.json())
      .then(({ quoteText, quoteAuthor }) => `${quoteText}- ${quoteAuthor}`);
  }
};
