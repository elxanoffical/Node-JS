const router = require('express').Router()

router.get('/', (req,res)=>{
    res.json({test:"get users {name:'macbook'}"})
})

router.post('/', (req,res)=>{
    res.json({test:"post users {name:'macbook'}"})
})

router.put('/', (req,res)=>{
    res.json({test:"put users {name:'macbook'}"})
})

router.delete('/', (req,res)=>{
    res.json({test:"delete users {name:'macbook'}"})
})


module.exports = router
