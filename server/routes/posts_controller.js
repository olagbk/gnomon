'use strict';

module.exports = function(router, models){
  router.route('/posts')

  // create a post (accessed at POST http://localhost:8080/api/posts)
    .post(function(req, res) {

      models.Post.create({title: req.query.title, body: req.query.body})
        .then((post) => res.json({message: 'Post created!'}))
        .catch((err)=> console.log(err))
      })
    .get(function(req, res){

      models.Post.findAll().then((posts) => res.json(posts));
    })
      // // save the post and check for errors
      // post.save(function(err) {
      //   if (err)
      //     res.send(err);
      //
      //   res.json({ message: 'Post created!' });
      // });
};
