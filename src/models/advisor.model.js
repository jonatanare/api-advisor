import mongoose from 'mongoose'

const advisorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    children: {
        type: String,
        required: true,
        trim: true
    },
    birthday: {
        type: String,
        required: true,
        trim: true
    },
    sales_manager: {
        type: String,
        required: false,
        trim: true
    },
    commercial_manager: {
        type: String,
        required: false,
        trim: true
    },
    commercial_location: {
        type: String,
        required: true,
        trim: true
    },
    verify_email: {
        type: Boolean,
        required: false,
        default: false
    },
    email: {
        type: String,
        required: true,
        min: 1,
        max: 100
    },
    password: {
        type: String,
        required: true,
        min: 1,
        max: 100
    }
})

const Advisor = mongoose.model('Advisor', advisorSchema)

export { Advisor }