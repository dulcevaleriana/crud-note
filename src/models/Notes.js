import { Schema, model } from "mongoose";
// this's the module stucture to note list
const schema = new Schema(
    {
        title:{type: String, required: true},
        description:{type: String}
    },
    {
        timestamps: true
    }
)

export default model("Notes",schema)