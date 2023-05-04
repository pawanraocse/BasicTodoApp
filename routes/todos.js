const express = require('express');
const router = express.Router();
const Todo = require('../model/model');

router.get('/', async(req, res) => {
  const data = await Todo.find();
  res.send(data);
});

router.post('/', async(req, res) => {
  const body = req.body;
  const title = body.title;
  const tdo = new Todo({title});
  try {
    await tdo.save();
    res.send("Saved Successfully");
  } catch(err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put('/:id', async(req, res) => {
  const id = req.params.id;
  try {
    const task = await Todo.findById(id);
    task.completed = !task.completed;
    task.save();
    res.send("Updated successfully"); 
  } catch(err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.delete('/:id', async(req, res) => {
  const id = req.params.id;
  try {
    await Todo.findByIdAndDelete(id);
    res.send("Deleted successfully"); 
  } catch(err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router