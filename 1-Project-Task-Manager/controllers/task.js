const getAllTasks = (req, res) => {
    res.send('all items')
}

const createTasks = (req, res) => {
    console.log(req.body)

    res.json(req.body)
}

const getTask = (req, res) => {
    res.send({ id: req.params.id })
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('Delete task')
}

module.exports = { getAllTasks, createTasks, getTask, updateTask, deleteTask }