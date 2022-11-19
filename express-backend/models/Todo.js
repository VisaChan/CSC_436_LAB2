const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
{
    title: {type: String, required: true},
    description: {type: String, required: true,},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    created: {type: String, required: true, default: (new Date(Date.now())).toString()},
    checked: {type: Boolean, required: true},
    finished: {type: String, required: true}, 
    username: {type: String, required: true}
}
);

//Export model
module.exports = mongoose.model('Todo', TodoSchema);
