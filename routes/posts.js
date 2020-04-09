const express = require('express')
const router = express.Router();
const Posts = require('../models/Posts')

// Get all the posts
router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find()
        res.json(posts)
    } catch (error) {
        res.json({message: error})
    }
})

// Get specific post
router.get('/:postid', async (req, res) => {
    try {
        const post = await Posts.findById(req.params.postid)
        res.json(post)
    } catch (error) {
        res.json({message: error})
    }
})

// Submit a post
router.post('/', async (req, res) => {
    const post = new Posts({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const savedPost = await post.save();
        res.json(savedPost)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete a post
router.delete('/:postid', async (req, res) => {
    try {
        const deletedPost = await Posts.remove({_id: req.params.postid})
        res.json(deletedPost)
    } catch (error) {
        res.json({message: error})
    }
})

// Update a post
router.patch('/:postid', async (req, res) => {
    try {
        const updatedPost = await Posts.updateOne({
            _id: req.params.postid
        }, {
            $set: {
                title: req.body.title,
            }
        })
        res.json(updatedPost)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router;