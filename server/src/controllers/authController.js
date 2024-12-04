const jwt = require("jsonwebtoken");
const User = require("../models/user")

const loginHandler = async (req, res) => {

    const {email, password} = req.body;
    const user = await User.findOne( {email} );

    try {
        
        if (!user) {
            console.log("No user found.")
            res.status(401).json({
                message: "Auth failed"
            });
        }
        if (!user.validPassword(password)) {

            console.log(`${password} and \n user.validPassword(req.body.password)`)
            req.flash('error', 'Wrong password');
            res.status(401).json({
                message: "Auth failed"
            });
        }
        if(user) {
            console.log("logged in")
            const token = jwt.sign(
                {
                    email: user.email,
                    userId: user._id
                },
                    process.env.JWT_SECRET,
                {
                    expiresIn: "12h"
                }
            );

            console.log(token)

            return res.status(200).json({
                message: "Auth successful",
                token: token,
                uid: user._id
            });
        }
    } catch {
        console.log(err);
        res.status(500).json({
            error: err
        });
    } 

};

const signupHandler =  async (req, res) => {
    try {
        const user = new User()
        user.email = req.body.email,
        user.password = user.encryptPassword(req.body.password),
        user.created_at = Date.now()
        user.save()
        res.status(201).json({
            message: "User created."
        });
    } catch(e) {
        console.log(e)
        res.status(500).json({
          message: "An error has occured."
        })
    }
};

 const getUserHandler = async (req, res) => {
    const  {uid}  = req.params
    const user = await User.findOne({ _id: uid });
    
    if (!user) {
      
      return res.status(401).json({
        message: "User does not exist."
      });
    }
    if (user) {
      console.log("logged in")
      return res.status(200).json({
        message: "user found",
        uid: user._id,
        email: user.email,
        joined: user.created_At
      });
    }
};


module.exports = { loginHandler, signupHandler, getUserHandler }