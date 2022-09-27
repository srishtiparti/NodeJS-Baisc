const getAllJobs = async(req, res) => {
    res.send('register all job')
}

const getJob = async(req, res) => {
    res.send('register a single job')
}


const createJob = async(req, res) => {
    res.send('create a job')
}

const updateJob = async(req, res) => {
    res.send('update a job')
}
const deleteJob = async(req, res) => {
    res.send('delete a job')
}
module.exports = {
    getAllJobs,
    createJob,
    getJob,
    updateJob,
    deleteJob
}