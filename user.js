const express = require('express');
let router=express.Router(); //router->variable name
module.exports=router

router.get("/",(req,res)=>{
    res.send("user info");
})
 router.get("/newuser",(req,res)=>{
        res.send("user add");})
router.post("/postuser",(req,res)=>{
    res.send("user added using post");
})

//1st method
// router.get("/:id",(req,res)=>{
//     res.send("id value "+req.params.id);
// })
// router.put("/:id",(req,res)=>{
//     res.send("id value put "+req.params.id);
// })
// router.delete("/:id",(req,res)=>{
//     res.send("id value delete"+req.params.id);
// })


//2nd  method 
router
    .route('/:id')
    .get((req,res)=>{
        console.log(req.usery);
    res.send(" id value "+req.params.id);
    })
    .put((req,res)=>{
    res.send("id value put "+req.params.id);
   })
    .delete((req,res)=>{
    res.send("id value delete"+req.params.id);
   })

const users=[{name:"sathru"},{name:"Sow"},{name:"deepi"},{name:"preethi"}]
router.param("id",(req,res,next,id)=>{
    console.log(id);
    req.usery=users[id];
    next();
})