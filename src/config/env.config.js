import dotenv from "dotenv";
dotenv.config()

export const env = {
    app_name: process.env.APP_NAME,
    app_DOOR: process.env.app_DOOR,
    MONGO_URL: process.env.MONGO_URL

};