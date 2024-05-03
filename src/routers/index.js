const {Router } = require ('express');
const router = Router();
const {getUsers, createUser, getUserById, deleteUsers, updateUser} = require('../controllers/indexcontrollers')


router.get('/users', getUsers);
router.post('/users',createUser);
router.get('/users/:id',getUserById);
router.delete('/users/:id',deleteUsers);
router.put('/users/:id',updateUser);

module.exports = router;
