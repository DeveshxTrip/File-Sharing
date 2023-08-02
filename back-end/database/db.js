import mongoose from "mongoose";


const DBConnection = async () =>{
    const DB_URL = `mongodb+srv://aqqib:hello@cluster0.quhihlb.mongodb.net/?retryWrites=true&w=majority`;
    try {
       await mongoose.connect(DB_URL,{useNewUrlParser:true});
        console.log("Database connected");

    }
    catch{
        console.error("Error while connecting to the database",error.message);
    }
}

export default DBConnection;