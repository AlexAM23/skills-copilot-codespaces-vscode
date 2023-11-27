// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Create app
const app = express();
// Middlewares
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
// Routes
app.get('/posts/:id/comments', (req, res) => {
  res.send([]);
});
// Start server
const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

### 3. Add a new comment

- Create a new file `index.js` in the `comments` project
- Add `express`, `body-parser`, `cors` and `morgan` to the project
- Create the app
- Add middlewares
- Add routes
- Start the server

```js
// Path: comments.js
// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Create app
const app = express();
// Middlewares
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
// Routes
app.post('/posts/:id/comments', (req, res) => {
  res.send([]);
});
// Start server
const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

### 4. Add a new comment

- Create a new file `index.js` in the `comments` project
- Add `express`, `body-parser`, `cors` and `morgan` to the project
- Create the app
- Add middlewares
- Add routes
- Start the server

```js
// Path: comments.js
// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Create app
const app = express();
// Middlewares
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
// Routes
app.post('/posts/:id/comments', (req, res) => {
  res.send([]);
});
// Start server
const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Listening