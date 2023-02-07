import express from 'express'
import { dashboard } from '../controllers/admin'
import authorize from '../middleware/authorize'

const router = express.Router()

router.get('/', authorize, dashboard)

export default router
