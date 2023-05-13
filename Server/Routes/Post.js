const Post = require('../Collections/POST')
const express = require('express')
const router = express.Router()

router.post('/post', async(req, res) => {
    try {
        const { title,post,id_user,user_name,user_lastname,image} = req.body
        const old= await Post.findOne({title})
        if(!( title&&post&&id_user)){return res.json('No Completely')}
        if(old){return res.status(412).json('Trite')}
        const posts = await Post.create({title,post,id_user,user_name,user_lastname,image})
        res.json(posts),console.log(posts)
     }
    catch (error) { console.log(error) }
})
router.get('/postlist', async(req, res) => {
    try {
        const list = await Post.find()
        res.send(list),console.log(list)
     }
    catch (error) { console.log(error) }
})
router.get('/postlist/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const posts = await Post.findOne({ _id: id })
        res.send(posts)
     }
    catch (error) { console.log(error) }
})
router.get('/postlist/user/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const posts = await Post.find({ id_user: id })
        res.send(posts)
     }
    catch (error) { console.log(error) }
})
router.delete('/post&delete/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const dele = await Post.findOneAndDelete({ _id: id })
        res.send(dele)
     }
    catch (error) { console.log(error) }
})
router.put('/post&update/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const {post,title} = req.body
        const old= await Post.findOne({post})
        if(!(post&&title)){return res.json('No Completely')}
        if(old){return res.json('Trite')}
        const update = await Post.findOneAndUpdate(
            { _id: id },{post,title}
        )
        res.send(update)
     }
    catch (error) { console.log(error) }
})

module.exports=router