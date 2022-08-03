const { Router } = require('express');
const flightRouter = require('./flightRouter');
const userRouter = require('./userRouter');
const stripeRouter = require('./stripe')
const mpRouter = require('./mp')
const orderRouter = require('./orderRouter')
const airlineRouter=require('./airlineRouter')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/flights', flightRouter);
router.use('/user',userRouter)
router.use('/stripe', stripeRouter)
router.use('/mpcheckout', mpRouter)
router.use('/airline', airlineRouter)

router.use('/orders', orderRouter)

module.exports = router;
