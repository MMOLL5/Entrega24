import express from 'express';
import {Router} from 'express';
import session from 'express-session';

const logOutRouter = express.Router();

logOutRouter.get('/', (req, res) => {
    req.session.destroy();
    //res.json({ msg: 'session destruida' });
    res.redirect('/login');
});

export default logOutRouter;