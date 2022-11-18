import mongoose from 'mongoose'

const advisorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    trim: true
  },
  lastname: {
    type: String,
    required: false,
    trim: true
  },
  age: {
    type: String,
    required: false,
    trim: true
  },
  phone: {
    type: String,
    required: false,
    trim: true
  },
  children: {
    type: String,
    required: false,
    trim: true
  },
  birthday: {
    type: String,
    required: false,
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
    required: false,
    trim: true
  },
  validEmail: {
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
  },
  docs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'files',
      required: false
    }
  ]
}, {
  timestamps: true
})

const Advisor = mongoose.model('advisors', advisorSchema)

export { Advisor }
