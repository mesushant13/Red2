import express from 'express';
import { loadUsers, addUser, getUserById,editUser,deleteUser} from '../controllers/user-controller.js';

const route = express.Router();

route.get('/', loadUsers);
route.post('/add', addUser);
route.get('/:id', getUserById);
route.put('/:id', editUser);
route.delete('/:id', deleteUser);

export default route;