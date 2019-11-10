const db = require('../models');


exports.createPost = async function(req, res, next) {
  try{
    let post = await db.Post.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      postImageUrl: req.body.postImageUrl,
      user: req.params.id
    })
    let foundUser = await db.User.findById(req.params.id);
    foundUser.post.push(post.id)
    let foundPost = await db.Post.findById(post._id).populate('user');
    return res.status(200).json(foundPost);
  } catch(err) {
    return next(err);
  }
};


