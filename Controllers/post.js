const postRouter= require ('express').Router()
const { request, response } = require('express')
const Post = require ('../models/post')

postRouter.get('/',(request, response,next)=>{
    Post.find({}). then (res=>{
        response.status(200).send(res)
        next()
    })
})

postRouter.post('/', async (request,response,next)=>{
    const {tittle,content}=request.body

 
if (tittle && content){
    const postCount= await Post.countDocuments()

    const newPost=new Post ({
        id:postCount +1,
        tittle:tittle,
        content:content,
        author:author,
        date:Date(),
        upvotes:[0],
        downvotes:[0]
    })

    newPost.save()
    .then(res=>{
         response.status(201).send(res)
    })
    .catch(err=>{
        console.log(err)
        response.sendStatus(501)
    })
}
else{
    response.status(400).send({message:"check your request"})
}
})

module.exports=postRouter