const Job = require('../models/Job')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllJobs = async(req, res) => {

    const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt')
    res.status(StatusCodes.OK).json({ jobs })
}

const getJob = async(req, res) => {
    const { id: jobId } = req.params
    const { userId } = req.user
    const job = await Job.findOne({ _id: jobId, createdBy: userId }).exec()
    if (!job) {
        throw new NotFoundError('wrong path')
    }
    res.status(StatusCodes.OK).json({ job })
}


const createJob = async(req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
}

const updateJob = async(req, res) => {
    const {
        body: { company, position },
        user: { userId },
        params: { id: jobId }
    } = req

    if (company === "" || position === '') {
        throw new BadRequestError('Please enter required data')
    }


    const job = await Job.findOneAndUpdate({ _id: jobId, createdBy: userId }, req.body, { new: true, runValidators: true })
    if (!job) {
        throw new NotFoundError('No job found')
    }
    res.status(StatusCodes.OK).json({ job })

}
const deleteJob = async(req, res) => {
    const {
        user: { userId },
        params: { id: jobId }
    } = req

    const job = await Job.findOneAndDelete({ _id: jobId, createdBy: userId })
    if (!job) {
        throw new NotFoundError('No job found')
    }
    res.status(StatusCodes.OK).json({ job })

}
module.exports = {
    getAllJobs,
    createJob,
    getJob,
    updateJob,
    deleteJob
}