import express from 'express'

import { fetchKeyByID, upsertKeyValue } from '../controller'

const router = express.Router()

/* GET key by id  */
router.get('/:key', (req, res, next) => (
  fetchKeyByID(req, res)
))

router.post("/", (req, res) => upsertKeyValue(req, res))

export default router