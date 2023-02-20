import { Schema } from "mongoose"

const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({

  //RELATIONSHIPS:
  galaxy: { type: ObjectId, ref: 'Galaxy', required: true },
  star: { type: ObjectId, ref: 'Star', required: true}


},{timestamps: true, toJSON: { virtuals: true } })

