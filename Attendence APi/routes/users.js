import express from 'express';

import { createUser, getUsers, attendUser, deleteUser } from '../controllers/users.js';


const router = express.Router();

let users = [];

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', attendUser);


router.delete('/:id', deleteUser);

export default router;