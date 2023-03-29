const registerUser = (req, res) => {
    res.status(200).send("Regerter Route");
}

const loginUser = (req, res) => {
    res.statis(200).send("Login Route")
}


module.exports = {
    registerUser,
    loginUser
}