import { Schema } from "mongoose"

const ObjectId = Schema.Types.ObjectId

export const StarSchema = new Schema({

  //RELATIONSHIPS:
  galaxy: { type: ObjectId, ref: 'Galaxy', required: true }


},{timestamps: true, toJSON: { virtuals: true } })

