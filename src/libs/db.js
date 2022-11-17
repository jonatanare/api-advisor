import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`



function connect() {
    return mongoose.connect(URL)
}

export default connect