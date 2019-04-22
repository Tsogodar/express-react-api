const mongoose = require('mongoose');

const schema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	endDate: {
		type: Date,
		required: false
	},
	status: {
		type: String,
		enum: ['complete', 'in progress', 'dropped'],
		required: true
	}
});

module.exports.schema = schema;
