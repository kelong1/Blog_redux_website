const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const userSchema=require("../Models/userModel")




const RegisterUser=async(req,res)=>{
        const {name,email,password}=req.body
        try {
            if(!name||!email||!password){
                res.status(400)
                throw new Error("Please add all fields")
            }
            const userExists=await userSchema.findOne({email})
            if(userExists){
                res.status(400)
                throw new Error("User already exists")
            }

            const salt=await bcrypt.genSalt(10)
            const hashedPassword=await bcrypt.hash(password,salt)

            const user =await  userSchema.create({
                name,
                email,
                password:hashedPassword
            })
            if(user){
                res.status(201).json({
                    _id:user.id,
                    name:user.name,
                    email:user.email,
                    token:generateToken(user._id)
                   
                })
            }else{
                res.status(400)
                throw new Error('invalid user data')
            }
            
        } catch (error) {
            console.error(error)
        }
}
const loginUser=async(req,res)=>{
    const{email,password}=req.body
    try {
        const user=await  userSchema.findOne({email})

        if(user && (await bcrypt.compare(password,user.password)) ){
            res.json({
                _id:user.id,
                name:user.name,
                email:user.email,
                token:generateToken(user._id)
            })
            
        }else{
            res.status(400)
            throw new Error("invalid credentials")
        }
    } catch (error) {
        console.error(error)
    }

}

const  generateToken=(_id)=>{
    return jwt.sign({_id},process.env.JWT_SECRET,{
        expiresIn:"30d",
    })
} 
 const getMe=(async(req,res)=>{
    const{_id,name,email}=await userSchema.findById(req.user.id)

    res.status(200).json({
        _id,
        name,
        email
    })
 })

module.exports={
    RegisterUser,
    loginUser,
    getMe
}