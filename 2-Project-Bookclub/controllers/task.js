const Book = require('../models/task')

const getAllBooks = async(req, res) => {
    try {
        const books = await Book.find({})
        res.status(201).json({ books })

    } catch (error) {
        console.log(error)
    }
}

const createBook = async(req, res) => {
    try {
        const book = await Book.create(req.body)
        res.status(201).json({ book })
    } catch (error) {
        console.log(error)
    }
}

const getBook = async(req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findOne({ _id: id })
        if (!book) {
            res.status(404).json({ msg: "Book doesn't exist" })
        }
        res.status(201).json(book)

    } catch (error) {
        res.status(500).json({ msg: "Error! Invalid ID" })
    }
}


const updateBook = async(req, res) => {
    try {
        const { id: bookId } = req.params
        const { name: bookname } = req.body
        const { read: status } = req.body
        const book = await Book.findOneAndUpdate({ _id: bookId }, req.body, { new: true, runValidators: true, })
        if (!book) {
            res.status(404).json({ msg: "Book doesn't exist" })
        }
        res.status(201).json(book)
    } catch (error) {
        res.status(500).json({ msg: "Error! Invalid ID" })
    }
}

const deleteBook = async(req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findOneAndDelete({ _id: id });
        if (!book) {
            res.status(404).json({ msg: "Book doesn't exist" })
        }
        res.status(201).json(book)
    } catch (error) {
        res.status(500).json({ msg: "Error! Invalid ID" })
    }

}

module.exports = { getAllBooks, createBook, getBook, updateBook, deleteBook }