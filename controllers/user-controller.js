//@desc Register a new user
//@route /api/users
//@access public
const registerUser = (req, res) => {
    res.status(200).send("Regerter Route");
}

//@desc login  user
//@route /api/users
//@access public
const loginUser = (req, res) => {
    res.statis(200).send("Login Route")
}


module.exports = {
    registerUser,
    loginUser
}