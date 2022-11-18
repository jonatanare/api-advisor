import mongoose from 'mongoose'

const fileSchema = new mongoose.Schema({
  curp: {
    type: String,
    required: false,
    trim: true
  },
  curp_file: {
    type: String,
    required: true,
    trim: true
  },
  photo: {
    type: String,
    required: true,
    trim: true
  },
  rfc_file: {
    type: String,
    required: true,
    trim: true
  },
  adress_file: {
    type: String,
    required: true,
    trim: true
  },
  ine_file: {
    type: String,
    required: true,
    trim: true
  },
  bank_number: {
    type: String,
    required: false,
    trim: true
  },
  clabeBank_file: {
    type: String,
    required: false,
    trim: true
  },
  bank_file: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
})

const File = mongoose.model('files', fileSchema)

export { File }
