const express = require('express');
const router = express.Router();
const model = require('../../models/todo-list');

router.get('/', async (req, res) => {
	try {
		const response = await model.read();
		res.send(response);
	} catch (e) {
		res.send(e);
	}
});

router.post('/create', async (req, res) => {
	const newTodoObj = req.body;
	try {
		const response = await model.create(newTodoObj);
		res.send(response);
	} catch (e) {
		res.send(e);
	}
});

router.delete('/delete/:uid', async (req, res) => {
	const id = req.params.uid;
	try {
		const response = await model.delete(id);
		res.send(response);
	} catch (e) {
		res.send(e);
	}
});

router.put('/update/:uid', async (req, res) => {
	const newTodoObj = req.body;
	const id = req.params.uid;
	try {
		const response = await model.update(id, newTodoObj);
		res.send(response);
	} catch (e) {
		res.send(e);
	}
});

module.exports = router;
