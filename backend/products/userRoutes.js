import express from 'express';
import { Book, User } from './schema.js';

const router = express.Router();


async function loginfunctionality(req, res) {
    try {
        const { id, password } = req.body;
        if ((id === "nirajan") && (password === "nirajan")) {
            res.send("login successfull");
        }
        else {
            res.status(404).send("Credentials wrong!");

        }
    }
    catch {
        res.status(500).send("Unable to login!");
    }
}
router.post('/', loginfunctionality);


export default router;