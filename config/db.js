const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGGO_URI) 
        console.log(`MonggoDB Connect: ${error}`);
    } catch (error) {
        
    }
}