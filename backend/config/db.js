import mongoose from 'mongoose'

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Successfully connected to Database`)
    } catch(error){
        console.log(`You are not connected. Connection failed`)
    }
}

export default connectDB