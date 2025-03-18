import { Router } from 'express'
const router = Router()

//Creating first middleware 
const auth = function(req, res, next) {
    console.log("I am in the auth wala middleware");

    //adding a dummy user 
    req.user = {userId: 1, role: "admin"}

    if(req.user) {
        //if a valid user is there in req, then proceed to the next middleware

        next()
    } else {
        //if not a valid user
        res.json({
            success: false,
            message: "Not a Valid User"
        })
    }
}
const isStudent = function(req, res, next) {
    console.log("I am inside the student wala middleware");
    if(req.user.role === "student"){
        next()
    }
    else {
        res.json({
            succes: false,
            message: "Access denied, this route is only for students"
        })
    }
}

const isAdmin = function(req, res, next) {
    console.log("I am inside the Admin wala Middleware");
    if(req.user.role === "admin"){
        next()
    }
    else {
        res.json({
            success:false,
            message:"Access denied, this route is only for Admin"
        })
    }
    
}

//Routes

router.get('/student', auth, isStudent, (req, res)=> {
    console.log("I am inside student route");
    res.send("Student specific page")
    
})
router.get('/admin', auth, isAdmin, (req, res)=> {
    console.log("I am inside admin route");
    res.send("Admin specific page")
    
})
export default router

