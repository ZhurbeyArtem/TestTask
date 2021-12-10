import cityRouter from "./cityRouter";
import DeclarationRouter from './DeclarationRouter'
import UserRouter from './UserRouter'
import typeOrendRouter from './typeOrendRouter'
import express from "express";
const router = express()

router.use('/city', cityRouter)
router.use('/declaration', DeclarationRouter)
router.use('/user', UserRouter)
router.use('/city', typeOrendRouter)

module.exports = router