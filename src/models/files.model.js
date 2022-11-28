import mongoose from 'mongoose'

const fileSchema = new mongoose.Schema({
  curp: {
    type: String,
    required: false,
    trim: true
  },
  curp_file: {
    type: String,
    required: false,
    trim: true
  },
  keyCurp: {
    type: String,
    required: false
  },
  photo: {
    type: String,
    required: false,
    trim: true
  },
  keyPhoto: {
    type: String,
    required: false
  },
  rfc_file: {
    type: String,
    required: false,
    trim: true
  },
  keyRfc: {
    type: String,
    required: false
  },
  address_file: {
    type: String,
    required: false,
    trim: true
  },
  keyAddress: {
    type: String,
    required: false
  },
  ine_file: {
    type: String,
    required: false,
    trim: true
  },
  keyIne: {
    type: String,
    required: false
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
    required: false,
    trim: true
  },
  keyBank: {
    type: String,
    required: false
  }
}, {
  timestamps: true
})

const File = mongoose.model('files', fileSchema)

export { File }
