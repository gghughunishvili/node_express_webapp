const express = require('express');

const bookRouter = express.Router();

function router(nav) {
  const books = [
    {
      id: 1,
      read: false,
      title: 'Empire of Silver (Bai yin di guo)',
      genre: 'Drama|Romance',
      author: 'Tremaine Lonsbrough',
      timeToRead: 120,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    }, {
      id: 2,
      read: false,
      title: 'Surgeon, The',
      genre: 'Horror|Thriller',
      author: 'Misti Brewis',
      timeToRead: 160,
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
    }, {
      id: 3,
      read: false,
      title: 'Blind Justice (Hævnens nat)',
      genre: 'Drama|Mystery|Thriller',
      author: 'Keene Spawell',
      timeToRead: 80,
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum'
    }
  ];
  bookRouter.route('/')
    .get((req, res) => {
      res.render(
        'bookListView',
        {
          title: 'My App',
          nav,
          books
        }
      );
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render(
        'bookView',
        {
          title: 'My App',
          nav,
          book: books[id]
        }
      );
    });

  return bookRouter;
}

module.exports = router;
