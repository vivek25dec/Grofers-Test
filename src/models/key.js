import mongoose from 'mongoose'

import { TABLE_NAME } from '../utils'

const { Schema } = mongoose

const KeySchema = new Schema({
  key: {
    type: String,
    index: true,
  },
  value: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
})

const Key = mongoose.model(TABLE_NAME.TABLE_KEY, KeySchema)
export default Key
