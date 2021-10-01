import express from 'express';
import {Router} from 'express';

const logInRouter = express.Router();

logInRouter.get('/', (req, res) => {
    //res.render('login');
    const myUser = 'Mariano';
    const myPassword = 'CoderHouse';

    const { username, password } = req.query;
    // const body = req.body;

    if (username == myUser && password == myPassword) {
        req.session.loggedIn = true;
        req.session.contador = 1;
        req.session.admin = true;
        res.json({ msg: 'bienvenido' });
    } else res.status(401).json({ msg: 'no estas autorizado' });
    //});
});

export default logInRouter;