const getAllBooks = (req, res) => {
    try {
        res.send('all items')
    } catch (error) {
        console.log(error)
    }
}

const createBook = (req, res) => {
    try {
        console.log('working')
        console.log(req.body)
        res.json(req.body)
    } catch (error) {
        console.log(error)
    }
}

const getBook = (req, res) => {
    res.send('get single task')
}

const updateBook = (req, res) => {
    res.send('update task')
}

const deleteBook = (req, res) => {
    res.send('Delete task')
}

module.exports = { getAllBooks, createBook, getBook, updateBook, deleteBook }