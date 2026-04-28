var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  try {
    req.db.query('SELECT * FROM todos;', (err, results) => {
      if (err) {
        console.error('Error fetching todos:', err);
        return res.status(500).send('Error fetching todos');
      }
      res.render('index', { title: 'My Simple TODO', todos: results });
    });
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).send('Error fetching items');
  }
});

router.post('/create', function (req, res, next) {
    const { task } = req.body;

    // check for empty comment
    if (!task || task.trim() === '') {
      return res.status(400).send("Comment cannot be empty");
    }

    // check for long comment
    if (task.length > 255){
      return res.status(400).send("Comment is too long");
    }

    try {
      req.db.query('INSERT INTO todos (task) VALUES (?);', [task], (err, results) => {
        if (err) {
          console.error('Error adding comment:', err);
          return res.status(500).send('Error adding comment');
        }
        console.log('Comment added successfully:', results);
        // Redirect to the home page after adding
        res.redirect('/comments');
      });
    } catch (error) {
      console.error('Error adding comment:', error);
      res.status(500).send('Error adding comment');
    }
});

router.post('/delete', function (req, res, next) {
    const { id } = req.body;
    try {
      req.db.query('DELETE FROM todos WHERE id = ?;', [id], (err, results) => {
        if (err) {
          console.error('Error deleting todo:', err);
          return res.status(500).send('Error deleting todo');
        }
        console.log('Todo deleted successfully:', results);
        // Redirect to the home page after deletion
        res.redirect('/');
    });
    }catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).send('Error deleting todo:');
    }
}); 

// menu
router.get('/menu', function(req, res){
  res.render('menu');
});

// about
router.get('/about', function(req, res){
  res.render('about');
});

// comments
router.get('/comments', function(req, res){
  req.db.query('SELECT * FROM todos;', (err, results) => {

    if(err){
      return res.status(500).send("Error loading comments");
    }

    // comment timestamp format
    const formatted = results.map(c => ({
      ...c, formattedDate: new Date(c.created_at).toLocaleString()
    }));

    res.render('comments', { comments: formatted })

  });
});

module.exports = router;