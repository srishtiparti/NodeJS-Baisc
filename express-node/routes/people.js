const express = require('express');
const router = express.Router()

const { getPeople, createPerson, createPersonPostman, updatePerson, deletePerson } = require('../controller/people')


/* // get the data from data.js on javascript
router.get('/', getPeople)
    // post the updated data on javascript

router.post("/", createPerson)

// using postman to test the api
// add the new name in the database that is printed

router.post('/postman', createPersonPostman)
    // put method

router.put('/:id', updatePerson)


router.delete('/:id', deletePerson) */

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router