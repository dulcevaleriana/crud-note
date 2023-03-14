import {connect} from 'mongoose'
require('dotenv').config()

export const connectDB = async () => {
    try {
        await connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_KEY}@cluster0.rcqta.mongodb.net/${process.env.MONGODB_DBA}?retryWrites=true&w=majority`)
        console.log("connection works!!")
    } catch(err){
        console.log({err})
    }
}