var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOURI || 'mongodb://localhost/TodoDatabase');

//Schema
var todoSchema = mongoose.Schema({
  text: String,
  status: String
});

module.exports = {
	todoModel: mongoose.model("todo", todoSchema)
} 