import { v4 as uuidv4 } from 'uuid';

export const createUser = (req, res) => {

    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database`);

}

export const getUsers = (req, res) => {
    res.send(users);

}

export const attendUser = (req, res) => {
    const { id } = req.params;

    const attendence = users.find((user) => user.id === id);
    res.send(attendence);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users= users.filter((user) => user.id !== id );

    res.send(`user with the id ${id} deleted from the database.`);

}