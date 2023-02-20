import { Schema } from "mongoose"

const ObjectId = Schema.Types.ObjectId

export const GalaxySchema = new Schema({

  starCount: { type: Number, default: 0},
  planetCount: { type: Number, default: 0}

  //RELATIONSHIPS:



},{timestamps: true, toJSON: { virtuals: true } })

