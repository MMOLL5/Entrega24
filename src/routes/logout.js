import express from 'express';
import {Router} from 'express';

const logOutRouter = express.Router();

logOutRouter.get('/', (req, res) => {
    req.session.destroy();
   // res.json({ msg: 'session destruida' });
    res.render('logout');
});

export default logOutRouter;