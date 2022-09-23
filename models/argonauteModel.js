import mongoose from "mongoose"


const ArgonauteSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    lowercase: true
  },
  age: {
    type: Number,
    // default: 1,
    // validate: value => {
    //   if (value <= 0) {
    //     throw new Error('L\'Argonaute doit être né !')
    //   }
    // }
  },
  role: {
    type: String,
    trim: true,
    lowercase: true
  },
  qualification: {
    type: String,
    trim: true,
    lowercase: true
  }
})


const ArgonauteModel = mongoose.model('Argonaute', ArgonauteSchema)

export default ArgonauteModel