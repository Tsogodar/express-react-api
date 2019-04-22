const mongoose = require('mongoose');
const schema = require('../schemas/todo-list').schema;
const model = mongoose.model('Todo_list', schema);

module.exports = {
	create: async data => {
		return await new model(data).save();
	},

	read: async () => {
		return await model.find();
	},

	delete: async id => {
		return await model.findByIdAndDelete(id);
	},

	update: async (id, data) => {
		return await model.findByIdAndUpdate(id, data);
	}
};
