import {model, Schema} from 'mongoose'

const livroSchema = new Schema(
    {
        title:{type: String},
        rating: {type: Number},
        description: {type: String},
        writer: {type: String},
        star: {type: Array},
        poster: {type: String}
    },
    {
        timestamps: true
    }
)
export const livroModel = model("Livro",livroSchema)