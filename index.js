const fetch = require('node-fetch');

fetch('https://anapioficeandfire.com/api/')
  .then(res => res.json())
  .then(json => json.books)
  .then(books => {
    fetch(books)
      .then(res => res.json())
      .then(bookDetails => bookDetails.map(book => [book.name, book.url]))
      .then(booksList => booksList[0][1])
      .then(bookOne => {
        fetch(bookOne)
          .then(res => res.json())
          .then(bookOneDetails => bookOneDetails.povCharacters)
          .then(chars => {
            fetch(chars[0])
              .then(res => res.json())
              .then(charDetails => console.log(charDetails))
              .catch(err => console.log(err))
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  })



