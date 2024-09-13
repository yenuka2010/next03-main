import mongoose from "mongoose";

export const MongoConnect = () => {
    try {
        mongoose.connect(process.env.MONGO_LINK)
    } catch {
        console.log(errrr);
    }

};
export default MongoConnect;