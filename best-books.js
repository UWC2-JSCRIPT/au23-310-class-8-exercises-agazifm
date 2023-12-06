// script.js

//in order or this to work, you have to fill in the user input with the numbered 
//month/day/year. for example 01/07/2023

// function to fetch and display bestselling books
function fetchBooks() {
  // this will collect user input values
  const year = document.getElementById('year').value;
  const month = document.getElementById('month').value;
  const date = document.getElementById('date').value;

  // Create the URL for fetching bestselling hardcover fiction books
  const url = `https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction.json?api-key=${API_KEY}`;

  // fetches data from the API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      // Display information for the first 5 books
      const bookInfoContainer = document.getElementById('bookInfo');
      bookInfoContainer.innerHTML = ''; // Clear previous results

      for (let i = 0; i < 5 && i < data.results.books.length; i++) {
        const book = data.results.books[i];

        // Create a div element for each book
        const bookDiv = document.createElement('div');

        // displays all book information /title/author/desription
        const title = document.createElement('h3');
        title.innerText = `Title: ${book.title}`;
        bookDiv.appendChild(title);

        const author = document.createElement('p');
        author.innerText = `Author: ${book.author}`;
        bookDiv.appendChild(author);

        const description = document.createElement('p');
        description.innerText = `Description: ${book.description}`;
        bookDiv.appendChild(description);

        // Extra credit: the book image
        if (book.book_image) {
          const img = document.createElement('img');
          img.src = book.book_image;
          img.alt = 'Book Cover';
          bookDiv.appendChild(img);
        }

        // each book's details are neatly added to the container, making it easy to display them on the page
        bookInfoContainer.appendChild(bookDiv);
      }
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
}
