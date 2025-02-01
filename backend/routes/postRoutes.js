const express = require('express');
const Post = require('../models/Post');
const authenticateToken = require('../middlewares/auth');
const router = express.Router();

// Create a new post
router.post('/posts', authenticateToken, async (req, res) => {
  console.log('req', req.user)
  try {
    const { title, content, author ="aaa" } = req.body;
    const newPost = new Post({ title, content, author, createdBy: req.user.id, });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single post by id
router.get('/posts/:id', authenticateToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
