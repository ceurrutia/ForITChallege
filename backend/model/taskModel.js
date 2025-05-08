import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            required: true
        },
        created_at: {
            type: Date,
            required: true
        },
    },
    {
        timestamps: true
    }
);

export const Task = mongoose.model('Task', taskSchema);
