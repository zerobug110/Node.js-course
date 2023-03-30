
const mongoose = requirre("mongoose")

const useSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'please add a username'],
    },
    email:{
        type: String,
        required: [true, 'please add an email'],
        unique: true,
    },
    password:{
        type: String,
        required: [true, 'please add a password'],

    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},
{
    timeStamps: true,
}
)