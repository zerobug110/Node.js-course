//@desc Register a new user
//@route /api/users
//@access public
const registerUser = (req, res) => {
    res.status(200).send("Regerter Route");
    const {name, email, password } = req.body


    //validation
    if(!name || !email || !password) {
       throw new Error("Please include all fields")
    }

    res.send("Register Rout")

}

//@desc Login  user
//@route /api/users/login
//@access Public
const loginUser = (req, res) => {
    // res.statis(200).send("Login Route")
}


module.exports = {
    registerUser,
    loginUser
} 