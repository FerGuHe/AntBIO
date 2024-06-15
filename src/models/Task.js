import { description } from "commander";
import { Schema, model } from "mongoose";
import trim from "string.prototype.trim/implementation";
import { boolean } from "webidl-conversions";
import { create } from "yallist";

const taskSchema = new Schema({
    title: {
        type : String,
        required: true,
        unique: true,
        trim: true
    },
    description : {
        type : String,
        required : true,
    },
    description1 :  {
        type : String,
        required : true,
    },
    description2 : {
        type : String,
        required : true,
    },
    description3 : {
        type : String,
        enum: ['SI', 'NO'],
        required : true,
    },
    done: {
        type : Boolean,
        default: false,
    },
},{
    timestamps: true,
    versionKey: false
})

export default model('Task',taskSchema)
   