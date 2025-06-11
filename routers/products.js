const router = require('express').Router()

router.get('/', (req,res)=>{
    res.json({test:"get porducst {name:'macbook'}"})
})

router.post('/', (req,res)=>{
    res.json({test:"post porducst {name:'macbook'}"})
})

router.put('/', (req,res)=>{
    res.json({test:"put porducst {name:'macbook'}"})
})

router.delete('/', (req,res)=>{
    res.json({test:"delete porducst {name:'macbook'}"})
})


module.exports = router
